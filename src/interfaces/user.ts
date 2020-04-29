import {RightAnswer} from "./quizes";

export interface UserQuizAnswers {
    answersListing: RightAnswer[],
    errors: number[]
}