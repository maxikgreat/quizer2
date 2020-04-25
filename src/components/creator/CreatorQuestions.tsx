
import React, {useState} from 'react';
import {NewQuestionBlocks, RightAnswer} from "../../interfaces";
import {CreatorAnswer} from "./CreatorAnswer";
import {validateQuestion} from "../../validate";
import {isEmptyObject} from "../../helpFunctions";

export const CreatorQuestions = () => {

    const [questions, setQuestions] = useState<NewQuestionBlocks>({
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

    const onChangeRightAnswer = (indexOfAnswer: RightAnswer) => {
        const tempListing = questions.listing;

        tempListing[questions.activeQuestion].rightAnswer = indexOfAnswer;
        setQuestions({
            ...questions,
            listing: [...tempListing]
        })
    }

    const onCheckQuestionHandler = (): void => {
        const errors = validateQuestion(questions.listing[questions.activeQuestion]);

        if(!isEmptyObject(errors)) {
            setQuestions({
                ...questions,
                errors: errors
            })
        } else {
            setQuestions({
                ...questions,
                errors: {}
            })
        }
    };

    function renderAnswers() {
        return questions.listing[questions.activeQuestion].answers.map((value, index): JSX.Element => {
            return (
                <CreatorAnswer
                    key={index.toString()}
                    index={index}
                    value={questions.listing[questions.activeQuestion].answers[index]}
                    activeIndex={questions.listing[questions.activeQuestion].rightAnswer}
                    onChangeInput={onChangeInput}
                    onChangeRightAnswer={onChangeRightAnswer}
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
                    <button className="btn btn-danger mr-2">Delete all</button>
                    <span className="text-danger mr-2">{questions.errors?.textInputs}</span>
                    <span className="text-danger mr-2">{questions.errors?.rightAnswer}</span>
                </div>
            </div>
        </div>
    )
};