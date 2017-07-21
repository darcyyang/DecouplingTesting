import React, { Component } from 'react';
import request from 'superagent'
// import { actionCreators } from '../Reducers.js'
import {actionCreators} from '../actions/navigationActions.js'


export default class NavigationAPI extends Component {

    static loadRootNavigationData = (dispatch) => {
        console.log("enter into load navigation")
        return request
            .get('http://devd.alliancetime.com/rest/categories')
            .end((err, res) => {
                console.log("Async return navigation result and start dispath to test")
                return dispatch(actionCreators.default(res.text))
            });
    }

}