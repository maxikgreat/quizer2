import { ShowLoaderUserAction, HideLoaderUserAction, LoginSuccessAction, LoginErrorAction, LogoutAction } from './users';
import {
    FetchQuizesAction,
    GetActiveQuizAction,
    HideLoaderAction,
    HideModalAction,
    ShowLoaderAction,
    ShowModalAction
} from "./quizes";

export enum ActionTypes {
    showLoader = "SHOW_LOADER",
    hideLoader = "HIDE_LOADER",

    hideModal = 'HIDE_MODAL',
    showModal = 'SHOW_MODAL',

    fetchQuizes = "FETCH_ALL_QUIZES",
    getActiveQuiz = "GET_ACTION_QUIZ",

    showLoaderUser = "SHOW_LOADER_USER",
    hideLoaderUser = "HIDE_LOADER_USER",

    loginSuccess = "LOGIN_SUCCESS",
    loginError = "LOGIN_ERROR",

    logout = "LOGOUT"
}

export type Action = FetchQuizesAction
    | GetActiveQuizAction
    | ShowLoaderAction
    | HideLoaderAction
    | HideModalAction
    | ShowModalAction
    | ShowLoaderUserAction
    | HideLoaderUserAction
    | LoginSuccessAction
    | LoginErrorAction
    | LogoutAction;