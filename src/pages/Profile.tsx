import React, {useState, useEffect} from 'react';
import {Quiz} from '../interfaces';
import {Link, useHistory} from "react-router-dom";
import {Loader} from "../components/UI/Loader";
import {QuizCard} from "../components/QuizCard";
import {Finder} from "../components/Finder";
import {filter} from "../helpFunctions";

interface ProfileProps {
    quizesListing: Quiz[],
    loading: boolean,
    logged: boolean
}

export const Profile = ({quizesListing, loading, logged}: ProfileProps) => {
    const history = useHistory();
    useEffect(() => {
        if(!logged) {
            history.push('/login');
        }
    }, []);

    const [finder, setFinder] = useState<string>('');

    function renderQuizes() {
        const filtered = filter(finder, quizesListing);

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
                    editable = {true}
                />
            )
        })
    }

    return(
        <section className="profile">
            <div className="jumbotron jumbotron-fluid wrapper-bg border-neon-primary">
                <div className="jumbotron-title mb-3">
                    <h1 className="display-4">Welcome</h1>
                    <Link to="/quiz-creator" className="btn btn-outline-secondary neon-hover btn-big">Create quiz</Link>
                </div>
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