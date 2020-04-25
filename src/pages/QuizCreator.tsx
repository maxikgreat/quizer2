import React, {useState} from 'react';
import {CreatorMainInfo} from "../components/CreatorMainInfo";
import {NewQuiz} from "../interfaces";

export const QuizCreator = () => {

    const [newQuiz, setNewQuizState] = useState<NewQuiz>({});

    return(
        <section className="quiz-creator-container">
            <div className="jumbotron jumbotron-fluid">
                <div className="jumbotron-title mb-3">
                    <h1 className="display-4">Quiz creator</h1>
                </div>
            </div>
            <CreatorMainInfo
                newQuiz={newQuiz}
                setNewQuizState={setNewQuizState}
            />
        </section>
    )
}