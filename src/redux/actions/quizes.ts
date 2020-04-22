
import axios from 'axios';
import {Dispatch} from "redux";
import {ActionTypes} from "./types";

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: any;
}

const rootUrl = 'https://jsonplaceholder.typicode.com';

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${rootUrl}/todos`);
            dispatch<FetchQuizesAction>({
                type: ActionTypes.fetchQuizes,
                payload: response.data
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};
