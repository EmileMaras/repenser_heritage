import * as React from "react";
import produce from "immer";

import { ITodo, IHeritage } from "./types";
 
// Define the shape of the state. It might be more convenient to embed
// the 'completed' state inside the Todo interface. However, this way it allows
// for demonstration of a map in the state together with a selector to merge
// the data.
interface IState {
  todos: ITodo[];
  trancheAdd: number;
  tauxAdd: number;
  errormessage: string;
  heritageBrute: IHeritage[];
  heritageMutualiseTotal: number;
  heritageNet: IHeritage[];
}

// Define the shape of the context. This is what gets consumed by components
// who wish to get access to the state. You can create selectors and actions
// to provide encapsulated getters and setters.
interface IContext {
  state: IState;
  actions: {
    changeAddEntry: (tranche: number) => void;
    changeAddTaux: (taux: number) => void;      
    addTodo: () => void;
    deleteTodo: (id: number) => void;
  };
}

const initialTodos = [
  { id: 1, tranche: 100000, taux: 20 },
  { id: 2, tranche: 250000, taux: 40},
  { id: 3, tranche: 500000, taux: 60},
  { id: 4, tranche: 750000, taux: 80},
  { id: 5, tranche: 1000000, taux: 95}
];


const heritageBruteData = [
  { x: 0, h: 0  },
  { x: 10, h: 1001.9267822878209},
  { x: 20, h: 12023},
  { x: 30, h: 48092},
  { x: 40, h: 90173},
  { x: 50, h: 150289},
  { x: 60, h: 250481},
  { x: 70, h: 310597},
  { x: 80, h: 480924},
  { x: 90, h: 811560},
  { x: 95, h: 1322543},
  { x: 99, h: 2785356},
  { x: 99.5, h: 6272061},
  { x: 99.9, h: 8356069},
  { x: 100, h: 46950289}
];

// Calculate the last ID in the todoList for use in generating new IDs.
let nextId = Math.max(...initialTodos.map(t => t.id)) + 1;


// Create a React Context. Use an empty object as a default value, since
// the intent is to only use the Provider in the StateContainer. Cast
// this object to a IContext to prevent typescript from complaining.
const StateContext = React.createContext<IContext>({} as IContext);

class StateContainer extends React.PureComponent<{}, IState> {
  state = {
    todos: initialTodos,
    trancheAdd: 0,
    tauxAdd: 0,
    errormessage: " ",
    heritageBrute: heritageBruteData,
    heritageNet: [{x: 0, h: 0}],
    heritageMutualiseTotal: 0
  };

  
  updateHeritageNet = () => {
      this.setState(state => {
    var heritageNew: IHeritage[] = [{x: 0, h: 0}];
    var iTranche: number = -1;
    var iHeritageBrute: number = 0;
    var xNext: number;
    var hNext: number;
    var heritageMutualiseTotal: number = 0;
    var tauxL: number, tauxN: number = 0;
    var trancheL: number, trancheN: number = 0;
    var hBruteN: number, hBruteL: number;
    var xBruteN: number, xBruteL: number;
    var contrDebutTranche: number = 0;
    var heritagePrev: IHeritage;
    while (iHeritageBrute < this.state.heritageBrute.length - 1){
        heritagePrev = heritageNew[heritageNew.length - 1]
        hBruteN = state.heritageBrute[iHeritageBrute + 1].h
        hBruteL = state.heritageBrute[iHeritageBrute].h
        xBruteN = state.heritageBrute[iHeritageBrute + 1].x
        xBruteL = state.heritageBrute[iHeritageBrute].x
        if (iTranche === -1) {
            trancheL = 0;
            tauxL = 0;
        }else{
            trancheL = state.todos[iTranche].tranche;
            tauxL = state.todos[iTranche].taux;
        }
        if (iTranche < state.todos.length - 1) {
            trancheN = state.todos[iTranche + 1].tranche;
            tauxN = state.todos[iTranche + 1].taux;
        }else{
            trancheN = 200000000000000000000
        }
        while (hBruteN > trancheN) {
            xNext = xBruteL + (xBruteN - xBruteL) * (trancheN - hBruteL) / (hBruteN - hBruteL); 
            heritageMutualiseTotal += (xNext - heritagePrev.x) / 100 * 
                (contrDebutTranche + (heritagePrev.h + trancheN - 2 * trancheL) / 2 * tauxN / 100);
            contrDebutTranche += (trancheN - trancheL) * tauxL / 100;
            hNext = trancheN - contrDebutTranche;
            heritageNew.push({x: xNext, h: hNext});
            heritagePrev = {x: xNext, h: hNext};
            iTranche ++;
            trancheL = trancheN;
            tauxL = tauxN;
            if (iTranche < state.todos.length - 1) {	
                trancheN = state.todos[iTranche + 1].tranche;
                tauxN = state.todos[iTranche + 1].taux;
                } else {
                    trancheN = 1000000000000000000  			
                }
        }
        
        xNext = xBruteN;
        heritageMutualiseTotal += (xNext - heritagePrev.x) * 
            (contrDebutTranche + (heritagePrev.h + hBruteN - 2 * trancheL) / 2 * tauxL / 100) / 100;
        hNext = hBruteN - contrDebutTranche - (hBruteN - trancheL) * tauxL / 100;
        heritageNew.push({x: xNext, h: hNext});
        iHeritageBrute ++;
        };
    
    var heritageNewPlusMutuel: IHeritage[] = [];
    for (let xh  of heritageNew){
        heritageNewPlusMutuel.push({x: xh.x, h: xh.h + heritageMutualiseTotal})
    }
    this.setState({ 
            heritageMutualiseTotal: heritageMutualiseTotal,
            heritageNet: heritageNewPlusMutuel});
      });
   };

  deleteTodo = (id: number) => {
    // Use immer's produce for an immutable state update.
    this.setState(
      produce<IState>(state => {
        const index = state.todos.findIndex(todo => todo.id === id);
        state.todos.splice(index, 1);
      })
    );
    this.updateHeritageNet()
  };

  addTodo = () => {
    // Generate a new Todo using nextId (and increment it) and reset
    // textAdd (the text in the input field)
    this.setState(prevState => {
      const todo: ITodo = {
        id: nextId++,
        tranche: this.state.trancheAdd,
        taux: this.state.tauxAdd,
      };
      console.log("coucou")      
      var entryOk = true;
      var errormessageloc = " "
      //we fist check if the entry is valid
      for (let olddo  of prevState.todos){
        if (olddo.taux === todo.taux) {entryOk = false;
                                       errormessageloc = "il ne peut pas y avoir deux taux égaux"}
        if (olddo.tranche === todo.tranche) {entryOk = false;
                                             errormessageloc = "il ne peut pas y avoir deux limites de tranche égales"}
        if (olddo.tranche > todo.tranche && olddo.taux < todo.taux) 
            {entryOk = false;
             errormessageloc = "le taux doit croitre avec les tranche"};
        if (olddo.tranche < todo.tranche && olddo.taux > todo.taux) 
            {entryOk = false;
             errormessageloc = "le taux doit croitre avec les tranche"};
      }
      var sortedTodo: ITodo[] = prevState.todos
      if (entryOk) {
      sortedTodo = [todo, ...prevState.todos]
      sortedTodo.sort((leftSide, rightSide): number => {
          if (leftSide.tranche < rightSide.tranche) return -1;
          if (leftSide.tranche > rightSide.tranche) return 1;
          return 0;
          });
      }     
      
      if (entryOk) {  
      this.setState({
        todos: sortedTodo,
        trancheAdd: 0,
        tauxAdd: 0,
        errormessage: ""})
      } else {
       this.setState({todos: prevState.todos,
        trancheAdd: 0,
        tauxAdd: 0,
        errormessage: errormessageloc})
        };       
    });
    this.updateHeritageNet()
  };

  changeAddEntry = (tranche: number) => {
    this.setState({ trancheAdd: tranche });
  };

  changeAddTaux = (taux: number) => {
    this.setState({ tauxAdd: taux });
  };
    
    
  render() {
    // Build the context object with the cotainer state and all the
    // implementations of the selectors and actions.
    const context = {
      state: this.state,
      actions: {
        deleteTodo: this.deleteTodo,
        addTodo: this.addTodo,
        changeAddEntry: this.changeAddEntry,
        changeAddTaux: this.changeAddTaux
      }
    };

    // Pass the contet object as a value of the Context Provider. Then
    // render any children below it.
    return (
      <StateContext.Provider value={context}>
        {this.props.children}
      </StateContext.Provider>
    );
  }
}

export default StateContainer;
export const StateConsumer = StateContext.Consumer;
