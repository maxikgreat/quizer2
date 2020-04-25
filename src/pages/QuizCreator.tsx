import React, {useState} from 'react';
import {CreatorMainInfo} from "../components/creator/CreatorMainInfo";
import {Link} from "react-router-dom";
import {Complexity, NewQuiz} from "../interfaces";
import {isEmptyObject} from "../helpFunctions";
import {CreatorQuestions} from "../components/creator/CreatorQuestions";
import {validateMain} from "../validate";

export const QuizCreator = () => {

    const [newQuiz, setNewQuizState] = useState<NewQuiz>({
        title: '',
        description: '',
        complexity: Complexity.medium,
        questions: [],
        questionCount: 0
    });

    const checkQuizValidation = (): void => {
        const errors = validateMain(newQuiz);
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
            {console.log(newQuiz.questions)}
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
                            onClick={() => checkQuizValidation()}
                        >Create</button>
                    </div>
                </div>
            </div>
            <CreatorMainInfo
                newQuiz={newQuiz}
                setNewQuizState={setNewQuizState}
            />
            <CreatorQuestions
                newQuiz={newQuiz}
                setNewQuizState={setNewQuizState}
            />
        </section>
    )
}