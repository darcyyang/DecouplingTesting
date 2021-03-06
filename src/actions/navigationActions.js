import {types} from './actionTypes'

export const actionCreators = {

    default: (payload) => {
        return {type : 'test', payload: payload};
    },

    products: (payload) => {
        return { type: 'products', payload: payload };
    },

    product: (payload) => {
        return { type: 'product', payload: payload };
    },

    price: (payload) => {
        return { type: 'price', payload: payload };
    },
    login: (payload) => {
        return { type: 'login', payload: payload };
    },
    error:(payload) => {
        return { type: 'error', payload: payload };
    }
};


