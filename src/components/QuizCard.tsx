import React from 'react';
import {Complexity} from "../interfaces";

interface QuizCardProps {
    key: string,
    id: string,
    title: string,
    description: string,
    complexity: string,
    author: string,
    created: string,
    bestResult: number,
    questionCount: number,
    editable: boolean
}

export const QuizCard = ({id, title, description, complexity,
                             author, created, bestResult, questionCount, editable}: QuizCardProps) => {

    function setComplexity(): string {
        switch (complexity) {
            case Complexity.easy:
                return 'success';
            case Complexity.medium:
                return 'secondary';
            case Complexity.hard:
                return 'danger';
            default:
                return 'primary'
        }
    }

    return(
        <div className="card col-lg-6">
            <div className="card-body">
                <div className="card-title">
                    <h3>{title}</h3>
                    <span
                        className={`badge badge-${setComplexity()}`}
                    >{complexity}</span>
                </div>
                <div className="card-subtitle mb-2">
                    <span>Author: <span>{author}</span></span>
                    <span>Best pass result: <span>{bestResult}</span></span>
                </div>
                <p className="card-text">{description}</p>
                <div className="card-footer">
                    {editable
                        ? <>
                            <div className="buttons-container">
                                <button className="btn btn-secondary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                            <span className="questions-xs-hide">{questionCount} questions</span>
                        </>
                        : <>
                            <button className="btn btn-secondary">Start</button>
                            <span className="questions">{questionCount} questions</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};