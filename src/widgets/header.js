import React, { Component } from 'react';
import logo from '../logo.svg';
import Navigation from './navigation/';
import Login from './login';
import Search from './search';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    console.log("Start render header widget")
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                        <Navigation/>
                        <Login/>
                        <Search/>
                </Navbar.Collapse>
          </Navbar>
             
             
        </div>    
    );
  }
}

export default Header;