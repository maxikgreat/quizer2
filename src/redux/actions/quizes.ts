
import axios from 'axios';
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {QuestionBlock, Quiz} from "../../interfaces";

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
            const parsedData: Quiz[] = response.data.map((quiz: {[key: string]: string}): Quiz => {
                return {
                    id: parseInt(quiz.id),
                    title: quiz.title,
                    description: quiz.description,
                    author: quiz.author,
                    timeCreated: quiz.time_created,
                    questionCount: parseInt(quiz.question_count),
                    bestResult: parseInt(quiz.best_result)
                }
            });
            dispatch<FetchQuizesAction>({
                type: ActionTypes.fetchQuizes,
                payload: parsedData
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};

export const getQuestionsOfQuiz = (id: number) => {
    return async (dispatch: Dispatch) => {
        try{
            const response = await axios.post(`${rootUrl}/questionsOfQuiz.php`, {id});
            const parsedQuestions: QuestionBlock[] = response.data.map((block: {[key: string]: string}): QuestionBlock => {
                return {
                    question: block.question,
                    answers: [block.answer_1, block.answer_2, block.answer_3, block.answer_4],
                    rightAnswer: parseInt(block.right_answer)
                }
            });
            dispatch<QuestionsOfQuizAction>({
                type: ActionTypes.questionsOfQuiz,
                payload: parsedQuestions
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};
