import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import {QuizesState, SummaryState, UserState} from "./interfaces";
import {fetchQuizes} from "./redux/actions";
import {Modal} from "./components/UI/Modal";
import {Routes} from "./components/Routes";

export const App = () => {
    const quizes: QuizesState = useSelector((state: SummaryState) => state.quizes);
    const users: UserState = useSelector((state: SummaryState) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuizes());
    }, []);

    return(
        <>
            <Modal
                messages={{
                    quiz: quizes.modal
                }}
            />
            <Header />
            <main>
                <Routes
                    quizes={quizes}
                    users={users}
                />
            </main>
        </>
    )
};

