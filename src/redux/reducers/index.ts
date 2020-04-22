import {combineReducers} from "redux";
import {quizesReducer} from "./quizes";

// TODO INTERFACE FOR STATE

export const reducers = combineReducers({
    quizes: quizesReducer
});