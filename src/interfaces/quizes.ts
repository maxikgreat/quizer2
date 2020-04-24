
export enum RightAnswer {
    one = 1,
    two = 2,
    three = 3,
    four = 4
}

export enum Complexity {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard'
}

export enum Order {
    default = 'Default',
    questions = 'Questions',
    dataCreated = 'Data created',
    complexity = 'Complexity'
}

export type Answers = [string, string, string, string];

export interface QuestionBlock {
    question: string,
    answers: Answers,
    rightAnswer: RightAnswer
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

export interface QuizesState {
    loading: boolean,
    quizesList: Quiz[],
    activeQuiz: ActiveQuiz | null
}
