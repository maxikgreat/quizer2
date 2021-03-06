import React, {useState, useEffect} from 'react';
import {CreatorMainInfo} from "../components/creator/CreatorMainInfo";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ActiveQuiz, Complexity, NewQuiz} from "../interfaces";
import {isEmptyObject} from "../helpFunctions";
import {CreatorQuestions} from "../components/creator/CreatorQuestions";
import {validateMain} from "../validate";
import {addNewQuiz} from "../redux/actions";

interface QuizCreatorProps {
    logged: boolean;
}

export const QuizCreator = ({logged}: QuizCreatorProps) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(!logged) {
            history.push('/login');
        }
    }, [])

    const [newQuiz, setNewQuizState] = useState<NewQuiz>({
        title: '',
        description: '',
        complexity: Complexity.medium,
        questions: [],
        questionCount: 0
    });

    const checkQuizValidation = (): void => {
        const errors = validateMain(newQuiz);
        if(!isEmptyObject(errors) && !isEmptyObject(errors.questions)) {
            setNewQuizState({
                ...newQuiz,
                errors: errors
            })
        } else {
            setNewQuizState({
                ...newQuiz,
                errors: {
                    questions: {}
                }
            })
            const readyQuiz: ActiveQuiz = {
                id: Math.random().toString(36).substring(7),
                title: newQuiz.title,
                description: newQuiz.description,
                complexity: newQuiz.complexity,
                questions: newQuiz.questions,
                questionCount: newQuiz.questionCount,
                author: "Admin",
                bestResult: 0,
                timeCreated: new Date()
            }
            dispatch(addNewQuiz(readyQuiz));

            history.push('/profile');
        }
    };

    return(
        <section className="quiz-creator-container">
            <div className="jumbotron jumbotron-fluid wrapper-bg border-neon-primary">
                <div className="jumbotron-title">
                    <h1 className="display-4">Quiz creator</h1>
                    <div className="buttons-jumbo-container">
                        <button
                            onClick={() => history.goBack()}
                            className="btn btn-outline-danger neon-hover-red btn-big"
                        >Cancel</button>
                        <button
                            className="btn btn-outline-secondary neon-hover btn-big"
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