import {
    AddNewQuizErrorAction,
    AddNewQuizSuccessAction,
    FetchQuizesAction,
    GetActiveQuizAction,
    HideLoaderAction,
    ShowLoaderAction
} from "./quizes";

export enum ActionTypes {
    showLoader = "SHOW_LOADER",
    hideLoader = "HIDE_LOADER",
    fetchQuizes = "FETCH_ALL_QUIZES",
    getActiveQuiz = "GET_ACTION_QUIZ",
    addNewQuizSuccess = "ADD_NEW_QUIZ_SUCCESS",
    addNewQuizError = "ADD_NEW_QUIZ_ERROR"
}

export type Action = FetchQuizesAction
    | GetActiveQuizAction
    | AddNewQuizSuccessAction
    | AddNewQuizErrorAction
    | ShowLoaderAction
    | HideLoaderAction;