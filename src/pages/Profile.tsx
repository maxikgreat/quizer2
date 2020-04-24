import React, {useState} from 'react'
import {Quiz, Order} from '../interfaces'
import {Loader} from "../components/Loader";
import {QuizCard} from "../components/QuizCard";
import {OrderOptions} from "../components/OrderOptions";
import {Finder} from "../components/Finder";

interface ProfileProps {
    quizesListing: Quiz[],
    loading: boolean
}

export const Profile = ({quizesListing, loading}: ProfileProps) => {

    const [finder, setFinder] = useState('');
    const [orderType, setOrder] = useState(Order.default);

    function renderQuizes() {
        return quizesListing.map((quiz: Quiz): JSX.Element => {
            return(
                <QuizCard
                    key={quiz.id}
                    id = {quiz.id}
                    title = {quiz.title}
                    description = {quiz.description}
                    complexity={quiz.complexity}
                    author = {quiz.author}
                    created = {quiz.timeCreated}
                    bestResult = {quiz.bestResult}
                    questionCount = {quiz.questionCount}
                    editable = {true}
                />
            )
        })
    }

    return(
        <section className="profile">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4 mb-3">Welcome, <span className="text-primary">bla bla</span></h1>
                {/*<OrderOptions*/}
                {/*    setOrder={setOrder}*/}
                {/*/>*/}
                <Finder
                    title="Find quiz"
                    finder={finder}
                    setFinder={setFinder}
                />
            </div>
            {loading
                ? <Loader/>
                : <div className="quizes-container row">
                    {renderQuizes()}
                </div>
            }
        </section>
    )
};