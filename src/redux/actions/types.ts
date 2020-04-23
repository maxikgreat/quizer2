import {FetchQuizesAction, GetActiveQuizAction} from "./quizes";

export enum ActionTypes {
    fetchQuizes = "FETCH_ALL_QUIZES",
    getActiveQuiz = "GET_ACTION_QUIZ"
}

export type Action = FetchQuizesAction | GetActiveQuizAction;