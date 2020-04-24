
import {Quiz} from "../interfaces";

export function filter(compareValue: string, collection: Quiz[]) {
    return collection.filter((quiz: Quiz): Quiz | null => {
        if ((compareValue.substring(0, compareValue.length).toLowerCase() === quiz.title.substring(0, compareValue.length).toLowerCase())) {
            return quiz
        } else {
            return null
        }
    });
}