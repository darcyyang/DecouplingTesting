import React from 'react';
import { render } from 'react-dom'
// import './index.css';
import {createStore, applyMiddleware} from 'redux';
// import {reducer} from './Reducers.js';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory  } from 'react-router'
import Root from './roots'
import rootReducer from './reducers'




const store = createStore(rootReducer)


const appWithStoreProvider = (
    <Root store={store} />
)

render(appWithStoreProvider, document.getElementById('root'));