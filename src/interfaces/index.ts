import {QuizesState} from "./quizes";

export * from './user';
export * from './quizes'

export interface SummaryState {
    quizes: QuizesState
}