import {Action, ActionTypes} from "../actions";


const initialState = {
    quizesList: [],
    activeQuiz: {}
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