
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {QuestionBlock, Quiz} from "../../interfaces";
import firebase from "../../firebase";

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: Quiz[]
}

export interface QuestionsOfQuizAction {
    type: ActionTypes.questionsOfQuiz,
    payload: QuestionBlock[]
}

const rootUrl = 'https://quizer-5bb95.firebaseio.com/quizes';

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
            const response = await firebase.database().ref('/quizes');
            response.once('value', snapshot => {
                const data = snapshot.val();
                const parsedData: Quiz[] = [];
                for(let quiz in data){
                    if(data.hasOwnProperty(quiz)){
                        parsedData.push({
                            id: parseInt(quiz),
                            title: data[quiz].title,
                            description: data[quiz].description,
                            author: data[quiz].author,
                            timeCreated: data[quiz].timeCreated,
                            questionCount: parseInt(data[quiz].questionCount),
                            bestResult: parseInt(data[quiz].bestResult)
                        });
                    }
                }
                dispatch<FetchQuizesAction>({
                    type: ActionTypes.fetchQuizes,
                    payload: parsedData
                })
            }, errorObject => {
                console.log(errorObject.message);
            });
    }
};

export const getActiveQuiz = (id: number) => {
    return async (dispatch: Dispatch) => {

    }
};
