import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MyNavbar = props => {
    const [isOpen, setOpen] = useState(false)

    return (<div className="container">
        <Navbar light expand="md">
          <Link to="/" className="navbar-brand">MovieApp</Link>
          <NavbarToggler onClick={e => setOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/movies" className="nav-link">Movies</Link>
              </NavItem>
              <NavItem>
                <Link to="/genres" className="nav-link">Genres</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>)
}

export {MyNavbar}
