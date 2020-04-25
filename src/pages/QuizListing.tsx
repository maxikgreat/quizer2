import React, {useState} from 'react';
import {Quiz, OrderDirection, OrderType, OrderFull} from "../interfaces";
import {Loader} from "../components/UI/Loader";
import {QuizCard} from "../components/QuizCard";
import {Finder} from "../components/Finder";
import {OrderOptions} from "../components/OrderOptions";
import {sort, filter} from "../helpFunctions";

interface QuizListingProps {
    quizesListing: Quiz[],
    loading: boolean
}

export const QuizListing = ({quizesListing, loading}: QuizListingProps) => {

    const [finder, setFinder] = useState<string>('');
    const [order, setOrder] = useState<OrderFull>({type: OrderType.dataCreated, direction: OrderDirection.asc});

    function renderQuizes() {
        const tempQuizesList = [...quizesListing];

        const sorted = sort(order, tempQuizesList);
        const filtered = filter(finder, sorted);

        return filtered.map((quiz: Quiz): JSX.Element => {
            return(
                    <QuizCard
                        key={quiz.id}
                        id = {quiz.id}
                        title = {quiz.title}
                        description = {quiz.description}
                        complexity={quiz.complexity}
                        author = {quiz.author}
                        timeCreated = {quiz.timeCreated}
                        bestResult = {quiz.bestResult}
                        questionCount = {quiz.questionCount}
                    />
            )
        })
    }

    return(
        <section className="quiz-listing">
            <div className="jumbotron jumbotron-fluid wrapper-bg">
                <div className="jumbotron-title mb-3">
                    <h1 className="display-4">Quiz listing</h1>
                </div>
                <OrderOptions
                    order={order}
                    setOrder={setOrder}
                />
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