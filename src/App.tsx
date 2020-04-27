import React, {useEffect, useContext} from 'react';
import {Header} from "./components/Header";
import {Switch, Redirect, Route} from 'react-router-dom';
import {__RouterContext} from 'react-router';
import {useTransition, animated} from "react-spring";
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

    const {location} = useContext(__RouterContext);

    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0, transform: 'translate(100%,0)'},
        enter: {opacity: 1, transform: 'translate(0,0)'},
        leave: {opacity: 0, transform: 'translate(-50%,0)'}
    })

    return(
        <>
            <Header />
            <main>
                {transitions.map(({item, props, key}) => (
                    <animated.div key = {key} style = {props}>
                        <Switch location = {item}>
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
                        </Switch>
                    </animated.div>
                ))}
            </main>
        </>
    )
};

