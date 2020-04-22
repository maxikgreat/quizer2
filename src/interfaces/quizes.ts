
export enum RightAnswer {
    one,
    two,
    three,
    four
}

type Answers = [string, string, string, string];

export interface QuestionBlock {
    question: string,
    answers: Answers,
    rightAnswer: RightAnswer
}

export interface Quiz {
    id: number,
    title: string,
    description: string,
    questionBlocks: QuestionBlock[],
    questionCount: number,
    author: string, // USER
    timeCreated: Date, // time created
    bestResult: number
}