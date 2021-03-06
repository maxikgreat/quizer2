import {ValidateErrorQuestion, ValidateErrorsMain} from "../validate";

export enum RightAnswer {
    one, two, three, four
}

export enum Complexity {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard'
}

export enum OrderType {
    dataCreated = 'Data created',
    questions = 'Questions',
    complexity = 'Complexity'
}

export enum OrderDirection {
    asc,
    desc
}

export interface OrderFull {
    type: OrderType,
    direction: OrderDirection
}

export type Answers = [string, string, string, string];

export interface QuestionBlock {
    question: string,
    answers: Answers,
    rightAnswer: RightAnswer | undefined;
}

export interface QuizRouterParams {
    id?: string | undefined
}

export interface Quiz {
    id: string,
    title: string,
    description: string,
    complexity: Complexity,
    questionCount: number,
    author: string, // USER
    timeCreated: Date, // time created
    bestResult: number
}

export interface ActiveQuiz extends Quiz{
    questions: QuestionBlock[]
}

export interface NewQuiz {
    title: string,
    description: string,
    complexity: Complexity,
    questions: QuestionBlock[]
    questionCount: number,
    errors?: ValidateErrorsMain
}

export interface NewQuestionBlock extends QuestionBlock{
    wasAdded: boolean
}

export interface NewQuestionBlocks {
    listing: NewQuestionBlock[],
    activeQuestion: number,
    limit: number,
    errors?: ValidateErrorQuestion
}

export interface QuizesState {
    loading: boolean,
    modal: {
        message?: string,
        error?: string
    }
    quizesList: Quiz[],
    activeQuiz: ActiveQuiz | null
}
