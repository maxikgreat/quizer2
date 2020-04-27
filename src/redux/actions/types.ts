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
}

export type Action = FetchQuizesAction
    | GetActiveQuizAction
    | ShowLoaderAction
    | HideLoaderAction
    | HideModalAction
    | ShowModalAction;