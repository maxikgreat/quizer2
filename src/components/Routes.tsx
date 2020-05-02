import React, {useContext} from 'react';
import {animated, useTransition} from "react-spring";
import {Redirect, Route, Switch} from "react-router-dom";
import {QuizListing, Profile, QuizCreator, ActiveQuizPage, Login, Logout} from "../pages";
import {__RouterContext} from "react-router";
import {QuizesState, UserState} from "../interfaces";

interface RoutesProps {
    quizes: QuizesState,
    users: UserState
}

export const Routes = ({quizes, users}: RoutesProps) => {
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
                                           logged={users.logged}
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
                            <Route path='/login'
                                    render={() =>
                                        <Login />
                                    }
                            />
                            <Route path='/quiz-creator' 
                                    render={() => 
                                        <QuizCreator 
                                            logged={users.logged}
                                        />
                                    } />
                            <Route path='/logout' 
                                    render={() =>
                                        <Logout />
                                    } 
                            />
                            <Redirect to='/' />
                        </Switch>
                    </Switch>
                </animated.div>
            ))}
        </>
    )
}