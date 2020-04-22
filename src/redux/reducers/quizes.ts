import {Action, ActionTypes} from "../actions";

export const quizesReducer = (state: any = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchQuizes:
            return action.payload;
        default:
            return state;
    }
};