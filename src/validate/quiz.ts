import {NewQuiz, QuestionBlock} from "../interfaces";

export interface ValidateErrorsMain {
    title?: string,
    description?: string,
    questions: {
        message?: string,
        errorIndex?: number
    },
}

export function validateMain(quiz: NewQuiz): ValidateErrorsMain {

    let errors: ValidateErrorsMain = {
        questions: {}
    };

    if(!quiz.title) {
        errors.title = 'This field is required!';
    }
    if (quiz.title && (quiz.title.length < 3 || quiz.title.length > 20)) {
        errors.title = 'Title length must be in range from 3 to 20 characters!'
    }
    if (!quiz.description) {
        errors.description = 'This field is required!';
    }
    if (quiz.description && (quiz.description.length < 3 || quiz.description.length > 20)) {
        errors.description = 'Description length must be in range from 3 to 150 characters!';
    }

    if (quiz.questions.length === 0 || quiz.questionCount === 0) {
        errors.questions.message = 'Quiz must contain at least 1 question!';
    } else {
        quiz.questions.forEach((question: QuestionBlock, index: number) => {
            const checkAnswers = question.answers.every((answer:string) => answer);
            if(!checkAnswers && question.question.length !== 0 && question.rightAnswer !== undefined) {
                errors.questions.message = `Check "${index + 1}" question to finish creation quiz!`;
                errors.questions.errorIndex = index;
                return
            }
        })
    }

    return errors
}