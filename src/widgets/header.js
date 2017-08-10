import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from './navigation/';
import LoginAPI from './../api/loginAPI'

class Header extends Component {

    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    handleLogout(){
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
                <h2>Welcome to React</h2>
                <Navigation/>
            </div>
        );
    }
}


export default Header;