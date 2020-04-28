import React, {useContext} from 'react';
import {animated, useTransition} from "react-spring";
import {Redirect, Route, Switch} from "react-router-dom";
import {QuizListing, Profile, QuizCreator, ActiveQuizPage} from "../pages";
import {__RouterContext} from "react-router";
import {QuizesState} from "../interfaces";

interface RoutesProps {
    quizes: QuizesState
}

export const Routes = ({quizes}: RoutesProps) => {
    const {location} = useContext(__RouterContext);

    const transitions = useTransition(location, location => location.pathname, {
        from: {opacity: 0, transform: 'translate(100%,0)'},
        enter: {opacity: 1, transform: 'translate(0,0)'},
        leave: {opacity: 0, transform: 'translate(-50%,0)'}
    })

    return(
        <>
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
                            <Route path='/quiz/:id'
                                   render={() =>
                                       <ActiveQuizPage
                                           activeQuiz = {quizes.activeQuiz}
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
        </>
    )
}