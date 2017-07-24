import {combineReducers} from 'redux';
import navigation from './navigationReducers';
import products from './productReducers'

const rootReducer = combineReducers({
  navigation,
  products
})

export default rootReducer;