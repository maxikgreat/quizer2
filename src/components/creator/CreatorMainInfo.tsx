import React from 'react';
import {Complexity, NewQuiz} from "../../interfaces";

interface CreatorMainInfoProps {
    newQuiz: NewQuiz,
    setNewQuizState(newQuiz: NewQuiz): void,
}

export const CreatorMainInfo = ({newQuiz, setNewQuizState}: CreatorMainInfoProps) => {
    const setProgress = (): {width: number, color: string}=> {
        if(newQuiz.complexity === Complexity.easy) {
            return {
                width: 10,
                color: 'success'
            }
        } else if(newQuiz.complexity === Complexity.medium) {
            return {
                width: 50,
                color: 'warning'
            }
        } else {
            return {
                width: 90,
                color: 'danger'
            }
        }
    }

    return(
        <div className="main-info-container wrapper-bg border-neon-primary">
            <div className="form-group row">
                <div className="col-lg-6 col-12">
                    <h2 className="neon-text-small">Title</h2>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        value={newQuiz.title}
                        onChange={(e) => setNewQuizState({
                            ...newQuiz,
                            title: e.target.value
                        })}
                    />
                    {newQuiz.errors?.title
                        ? <small className="form-text">
                            {newQuiz.errors?.title}
                        </small> : null
                    }
                </div>
                <div className="col-lg-6 col-12">
                    <h2 className="neon-text-small">Complexity</h2>
                    <div className="progress">
                        <div
                            className={`progress-bar progress-bar-striped bg-${setProgress().color}`}
                            role="progressbar"
                            style={{width: `${setProgress().width}%`}}
                        >
                        </div>
                    </div>
                    <div className="complexity-buttons-container">
                        <button
                            className="btn btn-success"
                            onClick={() => setNewQuizState({
                                ...newQuiz,
                                complexity: Complexity.easy
                            })}
                        >Easy</button>
                        <button
                            className="btn btn-warning"
                            onClick={() => setNewQuizState({
                                ...newQuiz,
                                complexity: Complexity.medium
                            })}
                        >Medium</button>
                        <button
                            className="btn btn-danger"
                            onClick={() => setNewQuizState({
                                ...newQuiz,
                                complexity: Complexity.hard
                            })}
                        >Hard</button>
                    </div>
                </div>
                <div className="col-12">
                    <h2 className="neon-text-small">Description</h2>
                    <textarea
                        className="form-control"
                        rows={3}
                        value={newQuiz.description}
                        onChange={(e) => setNewQuizState({
                            ...newQuiz,
                            description: e.target.value
                        })}
                    >
                    </textarea>
                    {newQuiz.errors?.description
                        ? <small className="form-text">
                            {newQuiz.errors?.description}
                        </small> : null
                    }
                </div>
            </div>
        </div>
    )
};