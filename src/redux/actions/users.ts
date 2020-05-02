import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import firebase, {FirebaseError} from 'firebase';

export interface ShowLoaderUserAction {
    type: ActionTypes.showLoaderUser
}

export interface HideLoaderUserAction {
    type: ActionTypes.hideLoaderUser
}

export interface LoginSuccessAction {
    type: ActionTypes.loginSuccess
}

export interface LoginErrorAction {
    type: ActionTypes.loginError
    payload: string
}

export interface LogoutAction {
    type: ActionTypes.logout
}

export const tryLogIn = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<ShowLoaderUserAction>({
            type: ActionTypes.showLoaderUser
        })
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch<LoginSuccessAction>({
                    type: ActionTypes.loginSuccess
                })
                dispatch<HideLoaderUserAction>({
                    type: ActionTypes.hideLoaderUser
                })
            })
            .catch((error: FirebaseError) => {
                dispatch<LoginErrorAction>({
                    type: ActionTypes.loginError,
                    payload: error.message
                })
                dispatch<HideLoaderUserAction>({
                    type: ActionTypes.hideLoaderUser
                })
            });
    }
};

export const logout = () => {
    return (dispatch: Dispatch) => {
        dispatch<LogoutAction>({
            type: ActionTypes.logout
        })
    }
}