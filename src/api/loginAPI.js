import React, {Component} from 'react';
import request from 'superagent'
// import { actionCreators } from '../Reducers.js'
import {actionCreators} from '../actions/navigationActions.js'
import CommonJs from './../CommonJs'
import { browserHistory } from 'react-router';


// const ashfordEndPoints = "http://orderupdate.getsandbox.com/"
// const ashfordEndPoints = "https://devd.alliancetime.com/rest/users/login"
const ashfordEndPoints = "http://localhost:8080/rest/users/"

export default class LoginAPI extends Component {

    static processLogout = () => {
        const host = document.location.host;
        const protocol = document.location.protocol;
        let domain = document.location.hostname;
        if(host.indexOf(":") !== -1){
             domain = document.location.hostname + ":8080";
        }
        // let url =  protocol + '//' + domain + '/rest/users/logout'
        const url =  '/rest/users/logout'
        // const domain = document.location.hostname;
        console.log("process logout" +domain )
        return request
            .post(url)
            .withCredentials()
            .end((err, res) => {
                if (res) {
                    if (true === res.body.success) {
                        console.log("login success!")
                        window.location.href = ('/myaccount/login');
                    } else {
                        console.log("logout failed! : " + res.body.error)

                    }
                } else if (err) {
                    const errorMsg = new Array([err.message]);
                    console.log("logout failed! : " + errorMsg)
                }
            });
    }

    static processLogin = (dispatch, login, password) => {

        const host = document.location.host;
        const protocol = document.location.protocol;
        let domain = document.location.hostname
        if(host.indexOf(":") !== -1){
             domain = document.location.hostname + ":8080";
        }
    //    let url =  protocol + '//' + domain + '/rest/users/login'
       const url =  '/rest/users/login'
        // const domain = document.location.hostname;
        console.log("eenter into load processLogin")
        return request
            .post(url)
            .withCredentials()
            // .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
            // .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            .query({login: login, password: password})
            .end((err, res) => {
                if (res) {
                    if (true === res.body.success) {
                        console.log("login success!")
                        window.location.href = ('/myaccount/profile');
                    } else {
                        console.log("login failed!")
                        if (res.body.error.type === 'normalError') {
                            const errorMsg = new Array([res.body.error.errorMessage]);
                            dispatch(actionCreators.error(errorMsg))
                        } else {
                            dispatch(actionCreators.error(res.body.error.fieldsError))
                        }

                    }
                } else if (err) {
                    const errorMsg = new Array([err.message]);
                    dispatch(actionCreators.error(errorMsg));
                }
                CommonJs.ajaxLoadComplete()
            });
    }
}