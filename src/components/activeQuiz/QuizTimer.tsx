import React, {useState, useEffect} from 'react';


interface QuizTimerProps {
    timer: number,
    setTimer(timer: number): void
}

export const QuizTimer = ({timer, setTimer}: QuizTimerProps) => {

    function formateTime(): string {
        let formattedMinutes = new Date(timer).getMinutes();
        let formattedSeconds = new Date(timer).getSeconds();
        return `${formattedMinutes < 10 ? '0' + formattedMinutes : formattedMinutes}:${formattedSeconds < 10 ? '0' + formattedSeconds : formattedSeconds}`
    }

    useEffect(() => {
        const timerHanler = setTimeout(() => setTimer(timer + 1000), 1000)
        return () => {
            clearTimeout(timerHanler)
        }
    }, [timer])

    return (
        <div className="quiz-timer col-2">
            {formateTime()}
        </div>
    )
};