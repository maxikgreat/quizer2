import {QuestionBlock, RightAnswer} from "../interfaces";

export interface ValidateErrorQuestion {
    textInputs?: string,
    rightAnswer?: string,
    deleteEmpty?: string,
    limitReached?: string
}

export function validateQuestion(
    inputs: QuestionBlock,
    length?: number,
    limit?: number
): ValidateErrorQuestion {

    let errors: ValidateErrorQuestion = {};

    if(length && limit){
        if(length > limit) {
            return {
                limitReached: `Limit was reached! Max is ${limit}`
            }
        }
    }

    if(!inputs.question) {
        if(!inputs.answers.every((answer: string) => answer !== '')) {
            errors.textInputs = 'Fill all fields!';
        }
        errors.textInputs = 'Fill all fields!';
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