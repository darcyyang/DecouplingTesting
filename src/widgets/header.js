import React, {Component} from 'react';
import logo from '../logo.svg';
import Search from './search';
import Navigation from './navigation/';

import LoginAPI from './../api/loginAPI'
import Login from './login';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends Component {

    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    handleLogout() {
        LoginAPI.processLogout();
    }

    render() {
        let firstName = this.getCookie("firstname");
        let lastName = this.getCookie("lastname");


        let userInfo = (<div className="user-info">
            Welcome! <a style={{'color': 'red'}} href='/myaccount/login'>Sign In</a>
            <a style={{'color': 'red'}} href='/myaccount/regsist'>Sign up</a>
        </div>)

        if (firstName && lastName) {
            userInfo = (<div className="user-info">
                <div className="welcome">Welcome! Mr.<span className="color-red"> {firstName}, {lastName}</span></div>
                <div className="logout"><a onClick={() => this.handleLogout()}>Logout</a></div>
            </div>)
        }
        return (
            <div className="App-header">
                {userInfo}
                <img src={logo} className="App-logo" alt="logo"/>
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle/>
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