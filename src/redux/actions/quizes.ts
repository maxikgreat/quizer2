
import axios from 'axios';
import {Dispatch} from "redux";
import {ActionTypes} from "./types";
import {Quiz} from "../../interfaces/quizes";

export interface FetchQuizesAction {
    type: ActionTypes.fetchQuizes,
    payload: Quiz[];
}

const rootUrl = './api';

export const fetchQuizes = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${rootUrl}/fetch_quizes.php`);
            console.log(response.data);
            dispatch<FetchQuizesAction>({
                type: ActionTypes.fetchQuizes,
                payload: response.data
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};
