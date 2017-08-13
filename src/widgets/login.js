import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { instanceOf } from 'prop-types';
import { ButtonToolbar } from 'react-bootstrap';
import NavigationAPI from '../api/navigationAPI'
import { connect } from 'react-redux'
import { Nav } from 'react-bootstrap';
import { withCookies, Cookies } from 'react-cookie';
import LoginAPI from './../api/loginAPI'


class Login extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  componentWillMount() {
    const { cookies } = this.props;
    cookies.set('name', "test", { path: '/' });

  }

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
    console.log("Start render Login widget")
    // const buttonsInstance = (
    // <ButtonToolbar>
    //     {/* Standard button */}
    //     <Button>Default</Button>
    //     <Button bsStyle="primary"  onClick={() => this.reloadNavigationData()}>Re-Load Navigation Data</Button>
    // </ButtonToolbar>
    // );

     var { cookies } = this.props;
    // if (cookies == undefined){
    //     cookies = {} 
    // }
     const firstName = cookies.get('name')
     const lastName = cookies.get("lastname");

     let userInfo = (
     <div className="user-info">
        Welcome! <a style={{ 'color': 'red' }} href='/myaccount/login'>Sign In</a>
        <a style={{ 'color': 'red' }} href='/myaccount/regsist'>Sign up</a>
      </div>
      )

      if (firstName && lastName) {
        userInfo = (
        <div className="user-info">
          <div className="welcome">Welcome! Mr.<span className="color-red"> {firstName}, {lastName}</span></div>
          <div className="logout"><a onClick={() => this.handleLogout()}>Logout</a></div>
        </div>
        )
      }

    return (
       <Nav pullRight>
            <button className="btn btn-default login-btn">
                     <span className="glyphicon glyphicon-user"  aria-hidden="true"></span>
                     {userInfo}
           </button> 
        </Nav>    
    );
  }
}


export default withCookies(Login);