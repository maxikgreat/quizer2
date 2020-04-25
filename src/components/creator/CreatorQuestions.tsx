
import React, {useState} from 'react';
import {NewQuestionBlocks, NewQuestionBlock, RightAnswer} from "../../interfaces";
import {CreatorAnswer} from "./CreatorAnswer";
import {validateQuestion} from "../../validate";
import {isEmptyObject} from "../../helpFunctions";

export const CreatorQuestions = () => {
    const [questions, setQuestions] = useState<NewQuestionBlocks>({
        listing: [{
            question: '',
            answers: ['', '', '', ''],
            rightAnswer: undefined,
            wasAdded: false
        }],
        activeQuestion: 0,
        limit: 2
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
            listing: tempListing
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

        setQuestions({
            ...questions,
            errors: {}
        });

        const errors = validateQuestion(
            questions.listing[questions.activeQuestion],
            questions.listing.length,
            questions.limit
        );

        if(!isEmptyObject(errors)) {
            setQuestions({
                ...questions,
                errors: errors
            })
        } else {
            if(questions.listing[questions.activeQuestion].wasAdded){
                setQuestions({
                    ...questions,
                    activeQuestion: questions.activeQuestion + 1,
                    errors: {}
                })
            } else {
                const emptyQuestion: NewQuestionBlock = {
                    question: '',
                    answers: ['', '', '', ''],
                    rightAnswer: undefined,
                    wasAdded: false
                }
                const tempListing = questions.listing;
                tempListing[questions.activeQuestion].wasAdded = true;
                tempListing.push(emptyQuestion);
                setQuestions({
                    ...questions,
                    listing: tempListing,
                    activeQuestion: questions.activeQuestion + 1,
                    errors: {}
                })
            }
        }
    };

    const onCheckQuestionByIndex = (index: number) => {
        if(!questions.listing[index].wasAdded && questions.listing.length > 1) {
            setQuestions({
                ...questions,
                errors: {}
            });

            const errors = validateQuestion(questions.listing[questions.activeQuestion]);

            if(!isEmptyObject(errors)) {
                setQuestions({
                    ...questions,
                    errors: errors
                })
            } else {
                setQuestions({
                    ...questions,
                    activeQuestion: index,
                    errors: {}
                })
            }
        } else if (questions.listing[questions.activeQuestion].wasAdded){

            const errors = validateQuestion(questions.listing[questions.activeQuestion]);

            if(!isEmptyObject(errors)) {
                setQuestions({
                    ...questions,
                    errors: errors
                })
            } else {
                setQuestions({
                    ...questions,
                    activeQuestion: index,
                    errors: {}
                })
            }
        } else {
            setQuestions({
                ...questions,
                activeQuestion: index,
                errors: {}
            })
        }
    }

    const onDeleteQuestion = (): void => {
            if(!questions.listing[questions.activeQuestion].wasAdded) {
                setQuestions({
                    ...questions,
                    errors: {
                        deleteEmpty: "You can't delete non-added question!"
                    }
                })
            } else {
                const tempListing = questions.listing;
                tempListing.splice(questions.activeQuestion, 1);
                setQuestions({
                    ...questions,
                    listing: tempListing,
                    errors: {}
                })
            }
    }

    const onDeleteAllQuestions = (): void => {
        if(questions.listing.length !== 1) {
            const emptyQuestion: NewQuestionBlock = {
                question: '',
                answers: ['', '', '', ''],
                rightAnswer: undefined,
                wasAdded: false
            }
            setQuestions({
                ...questions,
                listing: [emptyQuestion],
                activeQuestion: 0
            })
        }
    }

    function renderQuestionIndexes() {
        return questions.listing.map((item: NewQuestionBlock, index: number): JSX.Element => {
            return (
                <button
                    key={index}
                    className={index === questions.activeQuestion ? "badge badge-secondary" : "badge badge-primary"}
                    onClick={() => onCheckQuestionByIndex(index)}
                >{index + 1}</button>
            )
        })
    }

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

    function renderErrors() {
        if(!isEmptyObject(questions.errors as Object)){
            return Object.values(questions.errors as Object).map((error: string, index: number): JSX.Element => {
                return(
                    <span
                        className="text-danger mr-2"
                        key={index}
                    >{error}</span>
                )
            })
        }
    }

    return(
        <div className="create-questions-container wrapper-bg">
            <h2>Questions</h2>
            <div className="p-3">
                <div className="questions-indexes-container">
                    {renderQuestionIndexes()}
                </div>
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
                    {
                        questions.listing[questions.activeQuestion].wasAdded
                        ? <button
                                className="btn btn-primary mr-2"
                                onClick={() => onCheckQuestionHandler()}
                            >Update question
                        </button>
                            : <button
                                className="btn btn-primary mr-2"
                                onClick={() => onCheckQuestionHandler()}
                            >Add question</button>
                    }
                    <button
                        className="btn btn-danger mr-2"
                        onClick={() => onDeleteQuestion()}
                    >Delete</button>
                    <button
                        className="btn btn-danger mr-2"
                        onClick={() => onDeleteAllQuestions()}
                    >Delete all</button>
                    {renderErrors()}
                </div>
            </div>
        </div>
    )
};