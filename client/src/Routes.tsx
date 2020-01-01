import * as React from "react";

// @ts-ignore
import { Suspense } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Header";
import HeaderMobile from "./HeaderMobile"
const AdminPage = React.lazy(() => import("./AdminPage"));
import SimulationPage from "./SimulationPage";
import NotFoundPage from "./NotFoundPage";
import AccueilPage from "./accueil/AccueilPage";
import Biblio from "./Biblio/Biblio";
import Contact from "./contact/ContactPage";
import Conference from "./Conference/Conference"

const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.SFC<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <HeaderMobile />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/accueil" />
            <Route exact={true} path="/simulation" component={SimulationPage} />
            <Route exact={true} path="/accueil" component={AccueilPage} />
			<Route exact={true} path="/conference" component={Conference} />
            <Route exact={true} path="/biblio" component={Biblio} />
			<Route exact={true} path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default RoutesWrap;
