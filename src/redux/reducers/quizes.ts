import {Action, ActionTypes} from "../actions";
import {QuizesState} from "../../interfaces";

const initialState: QuizesState = {
    loading: false,
    quizesList: [],
    activeQuiz: null
};

export const quizesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.showLoader:
            return{
                ...state,
                loading: true
            };
        case ActionTypes.hideLoader:
            return{
                ...state,
                loading: false
            };
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