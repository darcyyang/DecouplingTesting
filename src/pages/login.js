import React, {Component} from 'react'
import Header from './../widgets/header';
import Footer from './../widgets/footer';
import '../App.css';
import LoginAPI from './../api/loginAPI'
import Error from  './../widgets/errorMessage'
import {connect} from 'react-redux'
import CommonJs from './../CommonJs'


const mapStateToProps =(state)=>({
    login: state.login,
})
class Login extends Component {

    handleLogin() {
        CommonJs.ajaxLoader();
        CommonJs.disableButton('loginBtn');
     const {dispatch} = this.props;
     const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        LoginAPI.processLogin(dispatch,login,password);
        /*    console.log('process login');
            const settings = {
                async: true,
                crossDomain: true,
                url: "https://leancloud.cn:443/1.1" + url,
                method: action,
                data: data
            }

            $.ajax(settings).done(function (response) {
                callback(response)
            });*/


        console.log('after login')
    }

    render() {


        return (
            <div className="App">
                <Header/>
                <div className="login-container">
                    this is login page
                    <div className="errorMsg">
                        <Error />
                    </div>
                    <form id="loginForm">
                        Login: <input type="text" id="login" name="login" label="login" placeholder="Please entry you login..."/>
                        <br/>
                        Password: <input type="password" id="password" name="password" label="password"
                                         placeholder="Please entry you password..."/>
                        <br/>
                        <a name="loginBtn" onClick={() => this.handleLogin()}>login</a>
                    </form>

                </div>
                <Footer/>
            </div>
        );
    }

}

class renderError extends Component{


    render(){

        let errorMsg = (<div>
            show error!
        </div>);
        return errorMsg;
    }
}

export default connect(mapStateToProps)(Login)