
export enum RightAnswer {
    one = 1,
    two = 2,
    three = 3,
    four = 4
}

type Answers = [string, string, string, string];

export interface QuestionBlock {
    question: string,
    answers: Answers,
    rightAnswer: RightAnswer
}

export interface Quiz {
    id: string,
    title: string,
    description: string,
    questionCount: number,
    author: string, // USER
    timeCreated: string, // time created
    bestResult: number
}

export interface ActiveQuiz extends Quiz{
    questions: QuestionBlock[]
}

export interface QuizesState {
    quizesList: Quiz[],
    activeQuiz: ActiveQuiz | null
}
