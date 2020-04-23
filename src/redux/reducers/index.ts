import {combineReducers} from "redux";
import {quizesReducer} from "./quizes";
import {SummaryState} from "../../interfaces";

export const reducers = combineReducers<SummaryState>({
    quizes: quizesReducer
});