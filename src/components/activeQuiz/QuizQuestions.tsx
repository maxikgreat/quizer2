import React, {useState} from 'react';
import {useTransition} from "react-spring";
import {QuestionBlock} from "../../interfaces";
import {QuizQuestion} from "./QuizQuestion";

interface QuizQuestionsProps {
    questionBlocks: QuestionBlock[] | undefined
}

export const QuizQuestions = ({questionBlocks}: QuizQuestionsProps) => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0)

    const transitions = useTransition(activeQuestion, item => item, {
        from: { opacity: 0, transform: 'translateY(100%)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(50%)' },
    })

    return(
        <>
            {
                questionBlocks
                ?
                    <>
                        <div className="wrapper">
                            Questions numbers
                        </div>
                            {transitions.map(({ item, props, key }) => {
                                return (
                                    <QuizQuestion
                                        style={props}
                                        questionBlock={questionBlocks[item]}
                                        key={key}
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