import React from "react";
import "./NavigationBar.css";
import {Navbar, Nav} from 'react-bootstrap';
import Logo from "../../images/ExplorePRLogo.png";
import { isLogged } from "../../services/authentication";

const userLogged = isLogged();

function NavigationBar() {
  if(!userLogged){
    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="/"><img className="Logo" src={Logo} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/meetourguides">Meet our Guides</Nav.Link>
            <Nav.Link href="/createguideaccount">Become a Guide</Nav.Link>
            <Nav.Link href="/tours">Tours</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }else{
    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="/"><img className="Logo" src={Logo} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/meetourguides">Meet our Guides</Nav.Link>
            <Nav.Link href="/createguideaccount">Become a Guide</Nav.Link>
            <Nav.Link href="/tours">Tours</Nav.Link>
            <Nav.Link href="/CustomerProfile">Profile</Nav.Link>
            <Nav.Link href="/home">LogOut</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
}

export default NavigationBar;