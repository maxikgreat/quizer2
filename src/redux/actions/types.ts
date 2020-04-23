import {FetchQuizesAction, QuestionsOfQuizAction} from "./quizes";

export enum ActionTypes {
    fetchQuizes = "FETCH_ALL_QUIZES",
    questionsOfQuiz = "GET_QUESTIONS_OF_QUIZ"
}

export type Action = FetchQuizesAction | QuestionsOfQuizAction;