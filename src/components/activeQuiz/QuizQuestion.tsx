import React, {CSSProperties} from 'react';
import {AnimatedValue, ForwardedProps, animated} from "react-spring";
import {QuestionBlock, UserQuizAnswers} from "../../interfaces";


interface QuizQuestionProps {
    activeQuestion: number,
    setActiveQuestion(activeQuestion: number): void,
    userAnswersState: UserQuizAnswers,
    setUserAnswerState(userAnswersState: UserQuizAnswers): void,
    style: AnimatedValue<ForwardedProps<ForwardedProps<CSSProperties>>>,
    questionBlock: QuestionBlock,
    lastQuestion: number
}

export const QuizQuestion = ({activeQuestion, userAnswersState, setActiveQuestion,
                                 setUserAnswerState, style, questionBlock, lastQuestion}: QuizQuestionProps) => {

    const onAnswerClickHandler = (index: number) => {
        const tempListing = userAnswersState.answersListing;
        tempListing[activeQuestion] = index;

        setUserAnswerState({
            ...userAnswersState,
            answersListing: tempListing
        })
        if(activeQuestion !== lastQuestion){
            setActiveQuestion(activeQuestion + 1);
        }
    }


    function renderAnswers() {
        return questionBlock.answers.map((answer: string, index: number) => {
            return (
                <div
                    className="answer-hld col-12 col-lg-6 mt-3 p-0"
                    key={index}
                    onClick={() => onAnswerClickHandler(index)}
                >
                    <span className="neon-text-very-small">{index + 1}.</span>
                    <div
                        className={
                            userAnswersState.answersListing[activeQuestion] === index
                                ? "answer btn btn-primary neon-text-very-small neon-hover neon-text-very-small"
                                : "answer btn btn-primary neon-text-very-small"
                        }
                    >
                        {answer}
                    </div>
                </div>
            )
        });
    }

    function renderEmptyQuestions() {
        let emptyIndexes = ' ';
        for (let i = 0; i < userAnswersState.errors.length; i++) {
            if(i === userAnswersState.errors.length - 1) {
                emptyIndexes+=`${userAnswersState.errors[i] + 1} `
                break;
            }
            emptyIndexes+=`${userAnswersState.errors[i] + 1}, `
        }
        return emptyIndexes;
    }

    return(
        <animated.div
            style={style}
            className="question wrapper-bg border-neon-primary"
        >
            <h2 className="neon-text-small">{questionBlock.question}</h2>
            <div className="answers row order-options-container btn-group btn-group-toggle">
                {renderAnswers()}
            </div>
            {userAnswersState.errors.length > 0
                ? <small className="form-text mt-2">
                    Fill answers in
                    {renderEmptyQuestions()}
                    questions to finish quiz!
                </small> : null
            }
        </animated.div>
    )
}