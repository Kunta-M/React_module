import {LOAD_USERS, ADD_USER} from "../actions/actions";

export const reducer = (state = {users: []}, action) => {
    switch (action.type){
        case LOAD_USERS:
            return {...state, users: [...action.payload]}
        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state;
    }
}