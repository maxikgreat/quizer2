import React, {CSSProperties} from 'react';
import {AnimatedValue, ForwardedProps, animated} from "react-spring";
import {QuestionBlock} from "../../interfaces";


interface QuizQuestionProps {
    style: AnimatedValue<ForwardedProps<ForwardedProps<CSSProperties>>>,
    questionBlock: QuestionBlock,
}

export const QuizQuestion = ({style, questionBlock}: QuizQuestionProps) => {

    function renderAnswers() {
        return questionBlock.answers.map((answer: string, index: number) => {
            return (
                <div
                    className="answer"
                    key={index}
                >
                    {answer}
                </div>
            )
        });
    }

    return(
        <animated.div
            style={style}
            className="question wrapper-bg border-neon-primary"
        >
            <h2>{questionBlock.question}</h2>
            <div className="answers">
                {renderAnswers()}
            </div>
        </animated.div>
    )
}