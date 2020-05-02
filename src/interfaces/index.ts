import {QuizesState} from "./quizes";
import { UserState } from "./user";

export * from './user';
export * from './quizes'

export interface SummaryState {
    quizes: QuizesState,
    users: UserState
}