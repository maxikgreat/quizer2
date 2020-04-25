import React, {useState} from 'react';
import {CreatorMainInfo} from "../components/creator/CreatorMainInfo";
import {Link} from "react-router-dom";
import {Complexity, NewQuiz} from "../interfaces";
import {validateRules, isEmptyObject} from "../helpFunctions";
import {CreatorQuestions} from "../components/creator/CreatorQuestions";

export const QuizCreator = () => {

    const [newQuiz, setNewQuizState] = useState<NewQuiz>({
        title: '',
        description: '',
        complexity: Complexity.medium,
    });

    const checkInputs = (): void => {
        const errors = validateRules(newQuiz);
        if(!isEmptyObject(errors)) {
            setNewQuizState({
                ...newQuiz,
                errors: errors
            })
        } else {
            setNewQuizState({
                ...newQuiz,
                errors: {}
            })
        }
    };

    return(
        <section className="quiz-creator-container">
            <div className="jumbotron jumbotron-fluid wrapper-bg">
                <div className="jumbotron-title mb-3">
                    <h1 className="display-4">Quiz creator</h1>
                    <div className="buttons-container">
                        <Link
                            to="/profile"
                            className="btn btn-danger btn-big mr-2"
                        >Cancel</Link>
                        <button
                            className="btn btn-primary btn-big"
                            onClick={() => checkInputs()}
                        >Create</button>
                    </div>
                </div>
            </div>
            <CreatorMainInfo
                newQuiz={newQuiz}
                setNewQuizState={setNewQuizState}
            />
            <CreatorQuestions

            />
        </section>
    )
}