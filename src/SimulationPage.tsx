import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IProduct, products } from "./ProductsData";
import { Link } from "react-router-dom";
import "url-search-params-polyfill";
import StateContainer from "./StateContainer";
import App from "./App";

interface IState {
  products: IProduct[];
  search: string;
}

class ProductsPage extends React.Component<RouteComponentProps, IState> {
  public static getDerivedStateFromProps(
    props: RouteComponentProps,
    state: IState
  ) {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get("search") || "";
    return {
      products: state.products,
      search
    };
  }

  public constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      products: [],
      search: ""
    };
  }

  public componentDidMount() {
    this.setState({ products });
  }

  public render() {
    return (
  <StateContainer>
    <App />
  </StateContainer>
    );
  }
}

export default ProductsPage;
