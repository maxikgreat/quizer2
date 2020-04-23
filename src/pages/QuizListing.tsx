import React from 'react';
import {Quiz} from "../interfaces";
import {Loader} from "../components/Loader";
import {QuizCard} from "../components/QuizCard";

interface QuizListingProps {
    quizesListing: Quiz[],
    loading: boolean
}

export const QuizListing = ({quizesListing, loading}: QuizListingProps) => {

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
                    />
            )
        })
    }

    return(
        <div>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Quiz listing</h1>
            </div>
            {loading
                ? <Loader/>
                : <div className="quizes-container row">
                    {renderQuizes()}
                </div>
            }
        </div>
    )
};