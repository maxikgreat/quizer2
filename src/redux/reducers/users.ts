import {Action, ActionTypes} from '../actions';
import {UserState} from '../../interfaces'

const initialState: UserState = {
    loading: false,
    logged: false,
    error: ''
};

export const usersReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.showLoaderUser:
            return {
                ...state, 
                loading: true
            }
        case ActionTypes.hideLoaderUser:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.loginSuccess:
            return {
                ...state,
                logged: true
            }
        case ActionTypes.loginError:
            return {
                ...state,
                error: action.payload
            }
        case ActionTypes.logout:
            return {
                ...state,
                logged: false
            }
        default:
            return state;
    }
}