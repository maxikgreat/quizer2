import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams, useHistory} from 'react-router-dom';
import {ActiveQuiz, QuizRouterParams, UserQuizAnswers} from "../interfaces";
import {getActiveQuiz} from "../redux/actions";
import {Loader} from "../components/UI/Loader";
import {QuizQuestions} from "../components/activeQuiz/QuizQuestions";
import {QuizFinished} from "../components/activeQuiz/QuizFinished";

interface ActiveQuizProps {
    activeQuiz: ActiveQuiz | null,
    loading: boolean
}

export const ActiveQuizPage = ({activeQuiz, loading}: ActiveQuizProps) => {
    const params: QuizRouterParams = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const [isFinished, setFinished] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [userAnswersState, setUserAnswerState] = useState<UserQuizAnswers>({
        answersListing: [],
        errors: []
    })

    useEffect(() => {
        if(params.id) {
            dispatch(getActiveQuiz(params.id));
        }
        //todo no existing quiz page
    }, []);

    const onFinishHandle = () => {
        if(activeQuiz) {
            const emptyAnswers: number[] = [];
            setUserAnswerState({
                ...userAnswersState,
                errors: emptyAnswers
            })
            for (let i = 0; i < activeQuiz.questionCount; i++) {
                if(typeof userAnswersState.answersListing[i] === 'undefined') {
                    emptyAnswers.push(i);
                    setUserAnswerState({
                        ...userAnswersState,
                        errors: emptyAnswers
                    })
                }
            }
            if(emptyAnswers.length === 0) {
                setFinished(true);
            }
        }
    }

    return(
        <section className="active-quiz-container">
            {
                loading
                ? <Loader />
                :   
                    <>
                        <div className="jumbotron jumbotron-fluid wrapper-bg border-neon-primary">
                            <div className="jumbotron-title">
                            <h1 className="display-4">Quiz {activeQuiz?.title}</h1>
                            <div className="buttons-jumbo-container">
                                {
                                    !isFinished
                                    ?
                                    <>
                                        <button
                                            onClick={() => history.goBack()}
                                            className="btn btn-outline-danger neon-hover-red btn-big"
                                        >Cancel</button>
                                        <button
                                            onClick={() => onFinishHandle()}
                                            className="btn btn-outline-secondary neon-hover btn-big"
                                        >Finish</button>
                                    </>
                                    : 
                                    <button
                                        onClick={() => history.push('/')}
                                        className="btn btn-outline-secondary neon-hover btn-big"
                                    >Back</button>
                                }
                            </div>
                        </div>
                        </div>
                        {
                            !isFinished
                            ? <QuizQuestions
                                timer={timer}
                                setTimer={setTimer}
                                activeQuestion={activeQuestion}
                                setActiveQuestion={setActiveQuestion}
                                userAnswersState={userAnswersState}
                                setUserAnswerState={setUserAnswerState}
                                questionBlocks={activeQuiz?.questions}
                            />
                            : <QuizFinished 
                                activeQuiz={activeQuiz}
                                timer={timer}
                                userAnswersState={userAnswersState}
                            />
                        }
                    </>
            }
        </section>
    )
};