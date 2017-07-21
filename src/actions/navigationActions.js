import {types} from './actionTypes'

export const actionCreators = {

    default: (payload) => {
        return {type : 'test', payload: payload};
    },

    remove: index => {
        return { type: types.REMOVE, payload: index };
    }
};


