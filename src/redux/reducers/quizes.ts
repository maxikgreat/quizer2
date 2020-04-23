import {Action, ActionTypes} from "../actions";
import {QuizesState} from "../../interfaces";

const initialState: QuizesState = {
    quizesList: [],
    activeQuiz: null
};

export const quizesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchQuizes:
            return {
                ...state,
                quizesList: action.payload
            };
        case ActionTypes.getActiveQuiz:
            return{
                ...state,
                activeQuiz: action.payload
            };
        default:
            return state;
    }
};