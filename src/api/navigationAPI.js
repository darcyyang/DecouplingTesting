import React, { Component } from 'react';
import request from 'superagent'
// import { actionCreators } from '../Reducers.js'
import {actionCreators} from '../actions/navigationActions.js'

// const ashfordEndPoints = "http://orderupdate.getsandbox.com/"
const ashfordEndPoints = "https://devd.alliancetime.com/rest/"

export default class NavigationAPI extends Component {

    static loadRootNavigationData = (dispatch) => {
        console.log("Start to load navigation data")
        return request
            .get(ashfordEndPoints + 'categories')
            .end((err, res) => {
                console.log("Async return navigation result and start dispath to test")
                return dispatch(actionCreators.default(res.text))
            });
    }

    static loadRootNavigationDataMock = (dispatch) => {
        console.log("Start to load navigation data")
        return request
            .get('http://orderupdate.getsandbox.com/categories')
            .end((err, res) => {
                console.log("Async return navigation result and start dispath to test")
                return dispatch(actionCreators.default(res.text))
            });
    }


    static loadNavigationDataByEndecaId = (dispatch, EndecaId) => {
        console.log("enter into load navigation")
        return request
            .get(ashfordEndPoints + 'categories/' + EndecaId)
            // .get(ashfordEndPoints + 'products')
            .end((err, res) => {
                return dispatch(actionCreators.products(res.text))
            });
            
    }


    static loadProductDetailData = (dispatch,productId) => {
        console.log("enter into load product detail")
        return request
            .get(ashfordEndPoints + 'products/' + productId)
            // .get(ashfordEndPoints + 'products')
            .end((err, res) => {
                return dispatch(actionCreators.product(res.text))
            });
            
    }

    static loadPriceData = (dispatch,skuId) => {
        console.log("enter into load price")
        return request
            .get(ashfordEndPoints + 'price/' + skuId)
            // .get(ashfordEndPoints + 'products')
            .end((err, res) => {
                return dispatch(actionCreators.price(res.text))
            });
            
    }




}