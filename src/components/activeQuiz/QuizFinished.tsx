import React, {useRef} from 'react';
import {ActiveQuiz, UserQuizAnswers} from '../../interfaces';
import {timerFormatter} from '../../helpFunctions';

interface QuizFinishedProps {
    activeQuiz: ActiveQuiz | null,
    timer: number,
    userAnswersState: UserQuizAnswers
}

interface ResultsInterface {
    question: string,
    answer: string,
    wasRight: boolean
}

export const QuizFinished = ({activeQuiz, timer, userAnswersState}: QuizFinishedProps) => {
    const willMount = useRef<boolean>(true);
    let wrongAnswers = 0;

    let results: JSX.Element[] = [];
    
    const useComponentWillMount = (func: () => JSX.Element[]) => {        
        if (willMount.current) {
            results = func();
        }
        willMount.current = false;
    };

    function renderCheckAnswers() {
        const results: ResultsInterface[] = [];
    
        if(activeQuiz) {
            for (let i = 0; i < activeQuiz.questionCount; i++) {
                if(activeQuiz.questions[i].rightAnswer === userAnswersState.answersListing[i]) {
                    results.push({
                        question: activeQuiz.questions[i].question,
                        answer: activeQuiz.questions[i].answers[userAnswersState.answersListing[i]],
                        wasRight: true
                    });
                } else {
                    wrongAnswers++;
                    results.push({
                        question: activeQuiz.questions[i].question,
                        answer: activeQuiz.questions[i].answers[userAnswersState.answersListing[i]],
                        wasRight: false
                    });
                }
            }
        }

        return results.map((result: ResultsInterface, index: number): JSX.Element => {
            return (
                <li className="result" key={index}>
                    <div className="result-question">
                        <span className="neon-text-very-small">{index + 1}. {result.question}</span>
                    </div>
                    <div className="result-answer">
                        <span className="neon-text-very-small">{result.answer}</span>
                        {
                            result.wasRight
                            ? <button className="btn btn-success">Success</button>
                            : <button className="btn btn-danger">Failure</button>
                        }
                    </div>
                </li>
            )
        })
    }

    useComponentWillMount(() => renderCheckAnswers());
    
    return (
        <>
            <div className="finished-container wrapper-bg border-neon-primary">
                <div className="finished-title">
                    <h2 className="neon-text-small">Results</h2>
                    <span className="neon-text-very-small">Finished at {timerFormatter(timer)}</span>
                </div>
                <ul className="results">
                    {results}
                </ul>
            </div>
            <div className="response-container wrapper-bg border-neon-primary">
                {
                    wrongAnswers > 1
                    ? <div className="failure neon-text-small">
                        Failure. Quiz wasn't passed. Max 1 wrong answer allowed.
                    </div>
                    : <div className="success neon-text-small">
                        Congratulations! You're passed this quiz.
                    </div>
                }
            </div>
        </>
    )
}