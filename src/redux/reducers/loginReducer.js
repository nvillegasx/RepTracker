import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    loggedIn: false,
    userInfo: {},
    userId: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN:
        // returns new state with updated items
            return {
                ...state,
                loggedIn: true,
                userInfo: action.data,
                userID: action.data._id
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                userInfo: {}
            }
        default:
            return state;
    }
}