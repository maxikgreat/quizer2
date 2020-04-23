import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuizes, quizById} from "./redux/actions";

export const App = () => {

    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(fetchQuizes());
    });

    return(
        <button onClick = {() => dispatch(quizById(1))}>fetch by id</button>
    )
};

