import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css'


export default class Navvy extends Component {
  constructor(){
    super()
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    if (this.props.currentUser.firstName !== "") {
      return(
      <div id="navvy">
      <Navbar light expand="md">
        <NavbarBrand href="/main">Potluck</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              Hello, {this.props.currentUser.firstName}
            </NavItem>
            <NavItem>
              <NavLink href="/house" >Create House</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/join-house" >Join House</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
      )} else {
    return(                                                                                   
    <div id="navvy">
        <Navbar light expand="md">
          <NavbarBrand href="/main">Potluck</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signUp">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" >Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/house" >Create House</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/join-house" >Join House</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
  }
}}