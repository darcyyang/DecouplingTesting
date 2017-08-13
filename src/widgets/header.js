import React, {Component} from 'react';
import logo from '../logo.svg';
import Search from './search';
import Navigation from './navigation/';

import LoginAPI from './../api/loginAPI'
import Login from './login';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { CookiesProvider } from 'react-cookie';
class Header extends Component {

    render() {

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navigation/>
                        <CookiesProvider>
                             <Login/>
                        </CookiesProvider>
                        <Search/>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;