import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuizes} from "./redux/actions";

export const App = () => {

    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(fetchQuizes());
    });

    return(
        <h1>hi there</h1>
    )
};

