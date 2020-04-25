import {NewQuiz} from "../interfaces";

export interface ValidateErrors {
    title?: string,
    description?: string
}

export function validateRules(inputs: NewQuiz): ValidateErrors {

    let errors: ValidateErrors = {};

    if(!inputs.title) {
        errors.title = 'This field is required!';
    }
    if (inputs.title && (inputs.title.length < 3 || inputs.title.length > 20)) {
        errors.title = 'Title length must be in range from 3 to 20 characters!'
    }
    if (!inputs.description) {
        errors.description = 'This field is required!';
    }
    if (inputs.description && (inputs.description.length < 3 || inputs.description.length > 20)) {
        errors.description = 'Description length must be in range from 3 to 150 characters!';
    }

    return errors
}