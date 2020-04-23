
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {ActiveQuiz, Quiz} from "../../interfaces";
import firebase from "../../firebase";

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: Quiz[]
}

export interface GetActiveQuizAction {
    type: ActionTypes.getActiveQuiz,
    payload: ActiveQuiz
}

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
            const response = await firebase.database().ref('/quizes');
            response.once('value', snapshot => {
                const data = snapshot.val();
                const parsedData: Quiz[] = [];
                for(let quiz in data){
                    if(data.hasOwnProperty(quiz)){
                        parsedData.push({
                            id: quiz,
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

export const getActiveQuiz = (id: string) => {
    return async (dispatch: Dispatch) => {
        const response = await firebase.database().ref(`/quizes/${id}`);
        response.once('value', snapshot => {
            const data = snapshot.val();
            console.log(data);
            dispatch<GetActiveQuizAction>({
                type: ActionTypes.getActiveQuiz,
                payload: {
                    id: id,
                    title: data.title,
                    author: data.author,
                    description: data.description,
                    questionCount: parseInt(data.questionCount),
                    questions: data.questions,
                    timeCreated: data.timeCreated,
                    bestResult: data.bestResult
                }
            })
        }, errorObject => {
            console.log(errorObject.message);
        });
    }
};
