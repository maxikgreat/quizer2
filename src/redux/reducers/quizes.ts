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
        default:
            return state;
    }
};