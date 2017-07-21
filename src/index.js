import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
// import {reducer} from './Reducers.js';
import { Provider } from 'react-redux';

import rootReducer from './reducers'

// import {loadNavigationData} from './Reducers.js'
// import thunk from 'redux-thunk';


const store = createStore(rootReducer)
// store.dispatch(loadNavigationData());


const appWithStoreProvider = (
  <Provider store={store}>
     <App />
  </Provider>
)

render(appWithStoreProvider, document.getElementById('root'));