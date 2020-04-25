import {ValidateErrors} from "../helpFunctions";

export enum RightAnswer {
    one = 'one',
    two = 'two',
    three = 'three',
    four = 'four'
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
    rightAnswer: RightAnswer | unknown;
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
    title?: string,
    description?: string,
    complexity: Complexity,
    questions?: QuestionBlock[]
    questionCount?: number,
    errors?: ValidateErrors
}

export interface QuizesState {
    loading: boolean,
    quizesList: Quiz[],
    activeQuiz: ActiveQuiz | null
}
