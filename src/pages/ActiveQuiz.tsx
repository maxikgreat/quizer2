import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import {ActiveQuiz, QuizRouterParams} from "../interfaces";
import {getActiveQuiz} from "../redux/actions";
import {Loader} from "../components/UI/Loader";
import {QuizQuestions} from "../components/activeQuiz/QuizQuestions";

interface ActiveQuizProps {
    activeQuiz: ActiveQuiz | null,
    loading: boolean
}

export const ActiveQuizPage = ({activeQuiz, loading}: ActiveQuizProps) => {
    const params: QuizRouterParams = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if(params.id) {
            dispatch(getActiveQuiz(params.id));
        }
    }, []);

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
                            </div>
                        </div>
                        <div className="questions-container">
                            <QuizQuestions
                                questionBlocks={activeQuiz?.questions}
                            />
                        </div>
                    </>
            }
        </section>
    )
};