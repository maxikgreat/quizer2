
import axios from 'axios';
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {QuestionBlock, Quiz} from "../../interfaces/quizes";

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: Quiz[]
}

export interface QuestionsOfQuizAction {
    type: ActionTypes.questionsOfQuiz,
    payload: QuestionBlock[]
}

const rootUrl = './api';

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${rootUrl}/fetchQuizes.php`);
            dispatch<FetchQuizesAction>({
                type: ActionTypes.fetchQuizes,
                payload: response.data
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};

export const quizById = (id: number) => {
    return async (dispatch: Dispatch) => {
        try{
            const response = await axios.post(`${rootUrl}/questionsOfQuiz.php`, {id});
            dispatch<QuestionsOfQuizAction>({
                type: ActionTypes.questionsOfQuiz,
                payload: response.data
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};
