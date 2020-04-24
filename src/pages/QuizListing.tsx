import React, {useState} from 'react';
import {Quiz} from "../interfaces";
import {Loader} from "../components/Loader";
import {QuizCard} from "../components/QuizCard";
import {Finder} from "../components/Finder";
import {OrderOptions} from "../components/OrderOptions";

interface QuizListingProps {
    quizesListing: Quiz[],
    loading: boolean
}

export const QuizListing = ({quizesListing, loading}: QuizListingProps) => {

    const [finder, setFinder] = useState('');

    function renderQuizes() {

        const filtered = quizesListing.filter((quiz: Quiz) => {
            if ((finder.substring(0, finder.length).toLowerCase() === quiz.title.substring(0, finder.length).toLowerCase())) {
                return quiz
            }
        });

        return filtered.map((quiz: Quiz): JSX.Element => {
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
                        editable = {false}
                    />
            )
        })
    }

    return(
        <section className="quiz-listing">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4 mb-3">Quiz listing</h1>
                <OrderOptions/>
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