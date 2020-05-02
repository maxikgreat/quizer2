import {RightAnswer} from "./quizes";

export interface UserQuizAnswers {
    answersListing: RightAnswer[],
    errors: number[]
}

export interface UserState {
    loading: boolean,
    logged: boolean,
    error: string
}