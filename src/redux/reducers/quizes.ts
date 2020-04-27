import {Action, ActionTypes} from "../actions";
import {QuizesState} from "../../interfaces";
import {act} from "react-dom/test-utils";

const initialState: QuizesState = {
    loading: false,
    modal: {},
    quizesList: [],
    activeQuiz: null
};

export const quizesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.showModal:
            return {
                ...state,
                modal: action.payload
            }
        case ActionTypes.hideModal:
            return {
                ...state,
                modal: {}
            }
        case ActionTypes.showLoader:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.hideLoader:
            return {
                ...state,
                loading: false
            };
        case ActionTypes.fetchQuizes:
            return {
                ...state,
                quizesList: action.payload
            };
        case ActionTypes.getActiveQuiz:
            return {
                ...state,
                activeQuiz: action.payload
            };
        default:
            return state;
    }
};