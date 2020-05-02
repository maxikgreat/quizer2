
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {ActiveQuiz, Quiz} from "../../interfaces";
import firebase from "../../firebase";
import {FirebaseError} from 'firebase';

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

export interface ShowModalAction {
    type: ActionTypes.showModal,
    payload: {[key: string]: string}
}

export interface HideModalAction {
    type: ActionTypes.hideModal
}

export const showModal = (isError: boolean, msg: string) => {
    return (dispatch: Dispatch) => {
        if(isError) {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    error: msg
                }
            })
        } else {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    message: msg
                }
            })
        }
        
    }
}

export const hideModal = () => {
    return (dispatch: Dispatch) => {
        dispatch<HideModalAction>({
            type: ActionTypes.hideModal
        })
    }
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
        }, (errorObject: FirebaseError) => {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    error: errorObject.message
                }
            })
            dispatch<HideLoaderAction>({
                type: ActionTypes.hideLoader
            });
        })
    }
};

export const getActiveQuiz = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch<ShowLoaderAction>({
            type: ActionTypes.showLoader
        });
        const response = await firebase.database().ref(`/quizes/${id}`);
        response.once('value', snapshot => {
            const data = snapshot.val();
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
            dispatch<HideLoaderAction>({
                type: ActionTypes.hideLoader
            });
        }, (errorObject: FirebaseError) => {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    error: errorObject.message
                }
            })
            dispatch<HideLoaderAction>({
                type: ActionTypes.hideLoader
            });
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
                dispatch<ShowModalAction>({
                    type: ActionTypes.showModal,
                    payload: {
                        message: 'New quiz was successfully added'
                    }
                })
            })
            .catch((e: FirebaseError) => {
                dispatch<ShowModalAction>({
                    type: ActionTypes.showModal,
                    payload: {
                        error: e.message
                    }
                })
            })
    }
}

export const updateBestResult = (quizId: string | undefined, bestResult: number) => {
    return async (dispatch: Dispatch) => {
        if(quizId) {
            await firebase.database().ref(`/quizes/${quizId}`)
            .child('bestResult')
            .set(bestResult)
            .then(() => {
                dispatch<ShowModalAction>({
                    type: ActionTypes.showModal,
                    payload: {
                        message: 'Your time passed was successfully added'
                    }
                })
            })
            .catch((e: FirebaseError) => {
                dispatch<ShowModalAction>({
                    type: ActionTypes.showModal,
                    payload: {
                        error: e.message
                    }
                })
            })
        }   
    }
}

export const deleteQuiz = (quizId: string) => {
    return async (dispatch: Dispatch) => {
        await firebase.database().ref(`/quizes/${quizId}`)
        .set(null)
        .then(() => {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    message: 'Quiz was deleted'
                }
            })
        })
        .catch((e: FirebaseError) => {
            dispatch<ShowModalAction>({
                type: ActionTypes.showModal,
                payload: {
                    error: e.message
                }
            })
        })
    }
}
