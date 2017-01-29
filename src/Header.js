import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

function Header() {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Karmaist</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem href="#">Logout</NavItem>
      </Nav>
    </Navbar>
    )
}

export default Header;