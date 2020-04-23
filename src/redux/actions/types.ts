import {FetchQuizesAction, GetActiveQuizAction, HideLoaderAction, ShowLoaderAction} from "./quizes";

export enum ActionTypes {
    showLoader = "SHOW_LOADER",
    hideLoader = "HIDE_LOADER",
    fetchQuizes = "FETCH_ALL_QUIZES",
    getActiveQuiz = "GET_ACTION_QUIZ"
}

export type Action = FetchQuizesAction | GetActiveQuizAction | ShowLoaderAction | HideLoaderAction;