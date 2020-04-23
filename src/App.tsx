import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchQuizes, getQuestionsOfQuiz} from "./redux/actions";
import {QuizesState, SummaryState} from "./interfaces";

export const App = () => {

    const quizes = useSelector((state: SummaryState): QuizesState => state.quizes);

    const dispatch = useDispatch();


    useEffect((): void => {
        dispatch(fetchQuizes());
    }, [dispatch]);

    return(
        <button onClick = {() => {dispatch(getQuestionsOfQuiz(1))}}>fetch by id</button>
    )
};

