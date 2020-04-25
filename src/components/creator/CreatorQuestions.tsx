
import React, {useState} from 'react';
import {QuestionBlock, RightAnswer} from "../../interfaces";
import {CreatorAnswer} from "./CreatorAnswer";

interface QuestionsCreate {
    listing: QuestionBlock[],
    activeQuestion: number
}

export const CreatorQuestions = () => {

    const [questions, setQuestions] = useState<QuestionsCreate>({
        listing: [{
            question: '',
            answers: ['', '', '', ''],
            rightAnswer: undefined
        }],
        activeQuestion: 0
    })

    const onChangeInput = (inputName: string, value: string, index?: number) => {

        const tempListing = questions.listing;

        if(inputName === 'question'){
            tempListing[questions.activeQuestion].question = value;
        }
        if(inputName === 'answer' && (index || index === 0)){
            tempListing[questions.activeQuestion].answers[index] = value;
        }
        setQuestions({
            ...questions,
            listing: [...tempListing]
        })
    }

    const onCheckQuestionHandler = (): void => {
        console.log(questions);
    };

    function renderAnswers() {
        return Object.keys(RightAnswer).map((value, index): JSX.Element => {
            return (
                <CreatorAnswer
                    key={value}
                    index={index}
                    value={questions.listing[questions.activeQuestion].answers[index]}
                    onChangeInput={onChangeInput}
                />
            )
        })
    }

    return(
        <div className="create-questions-container wrapper-bg">
            <h2>Questions</h2>
            <div className="p-3">
                <div className="input-group mt-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">Question</div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="question"
                        value={questions.listing[questions.activeQuestion].question}
                        onChange={(e) => onChangeInput(e.target.name, e.target.value)}
                    />
                </div>
                <div className="row">
                    {renderAnswers()}
                </div>
                <div className="mt-3">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={() => onCheckQuestionHandler()}
                    >Add question</button>
                    <button className="btn btn-danger mr-2">Delete</button>
                    <button className="btn btn-danger">Delete all</button>
                </div>
            </div>
        </div>
    )
};