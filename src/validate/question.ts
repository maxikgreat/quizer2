import {QuestionBlock, RightAnswer} from "../interfaces";

export interface ValidateErrorQuestion {
    textInputs?: string,
    rightAnswer?: string
}

export function validateQuestion(inputs: QuestionBlock): ValidateErrorQuestion {

    let errors: ValidateErrorQuestion = {};

    if(!inputs.question) {
        if(!inputs.answers.every((answer: string) => answer !== '')) {
            errors.textInputs = 'Fill all fields!';
        }
    } else {
        if(!inputs.answers.every((answer: string) => answer !== '')) {
            errors.textInputs = 'Fill all fields!';
        }
    }
    if(!inputs.rightAnswer && inputs.rightAnswer !== RightAnswer.one) {
        errors.rightAnswer = "Choose right answer!"
    }

    return errors;
}