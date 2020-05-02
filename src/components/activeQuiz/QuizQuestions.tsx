import React from 'react';
import {useTransition} from 'react-spring'
import {QuestionBlock, UserQuizAnswers} from "../../interfaces";
import {QuizQuestion} from "./QuizQuestion";
import {QuizTimer} from "./QuizTimer";

interface QuizQuestionsProps {
    timer: number,
    setTimer(timer: number): void,
    activeQuestion: number,
    setActiveQuestion(activeQuestion: number): void,
    userAnswersState: UserQuizAnswers,
    setUserAnswerState(userAnswerState: UserQuizAnswers): void,
    questionBlocks: QuestionBlock[] | undefined
}

export const QuizQuestions = ({timer, setTimer, activeQuestion, setActiveQuestion, userAnswersState, setUserAnswerState, questionBlocks}: QuizQuestionsProps) => {
    const transitions = useTransition(activeQuestion, item => item, {
        from: { opacity: 0, transform: 'translateY(100%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(50%)' },
    })

    function noAnswerQuestion(index: number): boolean {
        if(userAnswersState.errors.find(error => error === index)) {
            return true;
        } else return false;
    }

    function renderQuestionIndexes() {
        if(questionBlocks) {
            return questionBlocks.map((item: QuestionBlock, index: number): JSX.Element => {
                return (
                    <button
                        onClick={() => setActiveQuestion(index)}
                        key={index}
                        className={
                            index === activeQuestion
                                ? "btn btn-outline-primary neon-hover neon-text-very-small"
                                : typeof userAnswersState.answersListing[index] !== 'undefined'
                                    ? "btn btn-secondary"
                                    : noAnswerQuestion(index)
                                        ? "btn btn-danger"
                                        : "btn btn-outline-primary"
                        }
                    >{index + 1}</button>
                )
            })
        }
    }

    return(
        <>
            {
                questionBlocks
                ?
                    <>
                        <div className="question-indexes wrapper row">
                            <div className="col-10">
                                {renderQuestionIndexes()}
                            </div>
                            <QuizTimer 
                                timer={timer}
                                setTimer={setTimer}
                            />
                        </div>
                            {transitions.map(({ item, props, key }: any): JSX.Element => {
                                return (
                                    <QuizQuestion
                                        activeQuestion={activeQuestion}
                                        setActiveQuestion={setActiveQuestion}
                                        userAnswersState={userAnswersState}
                                        setUserAnswerState={setUserAnswerState}
                                        style={props}
                                        questionBlock={questionBlocks[item]}
                                        key={key}
                                        lastQuestion={questionBlocks.length - 1}
                                    />
                                )
                            })}
                    </>
                    : null
                //todo error
            }
        </>

    )
}