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
}

export const QuizQuestion = ({activeQuestion, userAnswersState, setActiveQuestion,
                                 setUserAnswerState, style, questionBlock}: QuizQuestionProps) => {

    const onAnswerClickHandler = (index: number) => {
        const tempListing = userAnswersState.answersListing;
        tempListing[activeQuestion] = index;

        setUserAnswerState({
            ...userAnswersState,
            answersListing: tempListing
        })

        setActiveQuestion(activeQuestion + 1);
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
                            "answer btn btn-primary"
                        }
                    >
                        {answer}
                    </div>
                </div>
            )
        });
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
        </animated.div>
    )
}