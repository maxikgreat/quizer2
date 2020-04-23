import React from 'react';
import {Complexity} from "../interfaces";

interface QuizCardProps {
    key: string,
    id: string,
    title: string,
    description: string,
    complexity: string,
    author: string,
    created: string
    questionCount: number
}

export const QuizCard = ({id, title, description, complexity,
                             author, created, questionCount}: QuizCardProps) => {

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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span
                        className={`badge badge-${setComplexity()}`}
                    >{complexity}</span>
                </h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <button className="btn btn-secondary">Card link</button>
            </div>
        </div>
    )
};