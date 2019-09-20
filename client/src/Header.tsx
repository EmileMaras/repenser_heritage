import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";

const Header: React.SFC<RouteComponentProps> = props => {
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get("search") || "");
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.history.push(`/products?search=${search}`);
    }
  };

  return (
    <header className="header">
      <nav>
        <NavLink
          to="/accueil"
          className="header-link"
          activeClassName="header-link-active"
        >
              Accueil
        </NavLink>      
        <NavLink
          to="/simulation"
          className="header-link"
          activeClassName="header-link-active"
        >
          Simulateur
        </NavLink>
        <NavLink
          to="/biblio"
          className="header-link"
          activeClassName="header-link-active"
        >
          Bibliographie
        </NavLink>
      </nav>
    </header>
  );
};

export default withRouter(Header);
