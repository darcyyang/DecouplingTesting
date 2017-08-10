import {initialState} from './initialState'

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'login':{
            console.log("start login reducer")
            return {
                login : payload
            };
            break;
        }

        case 'error':{
            console.log("start displaying error message")
            return{
                ...state,
                errorMessage: payload
            };
        }
    }
    console.log("return default state in reducers")
    return state;

};
export default reducer
