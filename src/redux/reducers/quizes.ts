import {Action, ActionTypes} from "../actions";
import {QuizesState} from "../../interfaces";

const initialState: QuizesState = {
    quizesList: [],
    questionsOfQuiz: []
};

export const quizesReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchQuizes:
            return {
                ...state,
                quizesList: action.payload
            };
        case ActionTypes.questionsOfQuiz:
            return {
                ...state,
                questionsOfQuiz: action.payload
            };
        default:
            return state;
    }
};