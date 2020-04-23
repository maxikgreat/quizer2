import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchQuizes, getActiveQuiz} from "./redux/actions";
import {QuizesState, SummaryState} from "./interfaces";

export const App = () => {

    const quizes = useSelector((state: SummaryState): QuizesState => state.quizes);

    const dispatch = useDispatch();


    useEffect((): void => {
        dispatch(fetchQuizes());
    }, [dispatch]);

    return(
        <>
            <h1>Hi there</h1>
            <button onClick = {() => {dispatch(getActiveQuiz(1))}}>fetch by id</button>
        </>
    )
};

