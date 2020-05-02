import React, {useEffect} from 'react';
import {timerFormatter} from '../../helpFunctions';


interface QuizTimerProps {
    timer: number,
    setTimer(timer: number): void
}

export const QuizTimer = ({timer, setTimer}: QuizTimerProps) => {

    //const quizTimeLimit = 20; //in minutes
    useEffect(() => {
        const timeHandler = setTimeout(() => setTimer(timer + 1000), 1000)
        return () => {
            clearTimeout(timeHandler)
        }
    }, [timer])

    return (
        <div className="quiz-timer col-2">
            {timerFormatter(timer)}
        </div>
    )
};