import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { Button, Nav, NavDropdown, NavItem, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/// In the render() method
const HeaderMobile: React.SFC<RouteComponentProps> = props => {
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
<Nav>
  <LinkContainer to="/accueil">
    <NavItem >Accueil</NavItem>
  </LinkContainer>
  <LinkContainer to="/conference">
    <NavItem >Conference</NavItem>
  </LinkContainer>
  <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
    <LinkContainer to="/simulation">
      <Dropdown.Item >Simulateur</Dropdown.Item>    
    </LinkContainer>
    <LinkContainer to="/biblio">
      <Dropdown.Item >Bibliographie</Dropdown.Item>    
    </LinkContainer>      
      
  </NavDropdown>  
</Nav>
)
}

export default HeaderMobile;