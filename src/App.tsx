import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import {Switch, Redirect, Route} from 'react-router-dom';
import {QuizListing} from "./pages/QuizListing";
import {Profile} from "./pages/Profile";
import {useDispatch, useSelector} from "react-redux";
import {QuizesState, SummaryState} from "./interfaces";
import {fetchQuizes} from "./redux/actions";
import {QuizCreator} from "./pages/QuizCreator";

export const App = () => {

    const quizes: QuizesState = useSelector((state: SummaryState) => state.quizes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuizes());
    }, []);

    return(
        <>
            <Header />
            <main>
                <Switch>
                    <Route path='/' exact
                           render={() =>
                               <QuizListing
                                   quizesListing = {quizes.quizesList}
                                   loading = {quizes.loading}
                               />
                           }
                    />
                    <Route path='/profile'
                           render={() =>
                                <Profile
                                    quizesListing = {quizes.quizesList}
                                    loading = {quizes.loading}
                                />
                           }
                    />
                    <Route path='/quiz-creator' component={QuizCreator} />
                    <Redirect to='/' />
                </Switch>
            </main>
        </>
    )
};

