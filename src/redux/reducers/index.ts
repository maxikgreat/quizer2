import {combineReducers} from "redux";
import {quizesReducer} from "./quizes";
import {QuizesState} from "../../interfaces/quizes";

interface SummaryState {
    quizes: QuizesState
}

export const reducers = combineReducers<SummaryState>({
    quizes: quizesReducer
});