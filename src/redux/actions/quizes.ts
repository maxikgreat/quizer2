
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {ActiveQuiz, Quiz} from "../../interfaces";
import firebase from "../../firebase";

export interface ShowLoaderAction {
    type: ActionTypes.showLoader
}

export interface HideLoaderAction {
    type: ActionTypes.hideLoader
}

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: Quiz[]
}

export interface GetActiveQuizAction {
    type: ActionTypes.getActiveQuiz,
    payload: ActiveQuiz
}

export interface AddNewQuizSuccessAction {
    type: ActionTypes.addNewQuizSuccess
}

export interface AddNewQuizErrorAction {
    type: ActionTypes.addNewQuizError
}

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
        dispatch<ShowLoaderAction>({
            type: ActionTypes.showLoader
        });
            const response = await firebase.database().ref('/quizes');
            response.on('value', snapshot => {
                const data = snapshot.val();
                const parsedData: Quiz[] = [];
                for(let quiz in data){
                    if(data.hasOwnProperty(quiz)){
                        parsedData.push({
                            id: quiz,
                            title: data[quiz].title,
                            author: data[quiz].author,
                            description: data[quiz].description,
                            complexity: data[quiz].complexity,
                            questionCount: parseInt(data[quiz].questionCount),
                            timeCreated: new Date(data[quiz].timeCreated),
                            bestResult: parseInt(data[quiz].bestResult)
                        });
                    }
                }
                dispatch<FetchQuizesAction>({
                    type: ActionTypes.fetchQuizes,
                    payload: parsedData
                });
                dispatch<HideLoaderAction>({
                    type: ActionTypes.hideLoader
                });
            })

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
                    complexity: data.complexity,
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

export const addNewQuiz = (quiz: ActiveQuiz) => {
    return async (dispatch: Dispatch) => {
        await firebase.database().ref(`/quizes/${quiz.id}`)
            .set({
                title: quiz.title,
                description: quiz.description,
                author: quiz.author,
                complexity: quiz.complexity,
                questionCount: quiz.questionCount,
                questions: quiz.questions,
                timeCreated: quiz.timeCreated.getTime(),
                bestResult: quiz.bestResult
            })
            .then(() => {
                dispatch<AddNewQuizSuccessAction>({
                    type: ActionTypes.addNewQuizSuccess
                })
            })
            .catch((e) => {
                dispatch<AddNewQuizErrorAction>({
                    type: ActionTypes.addNewQuizError
                })
            })
    }
}
