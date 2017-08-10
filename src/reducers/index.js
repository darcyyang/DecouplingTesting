import {combineReducers} from 'redux';
import navigation from './navigationReducers';
import products from './productReducers'
import product from './productDetailReducers'
import errorMessage from './loginReducer'

const rootReducer = combineReducers({
    navigation,
    products,
    product,
    errorMessage
})

export default rootReducer;