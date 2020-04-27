import React from 'react';
import {Complexity} from "../interfaces";
import {getMonthName} from "../helpFunctions";

interface QuizCardProps {
    key: string,
    id: string,
    title: string,
    description: string,
    complexity: Complexity,
    author: string,
    timeCreated: Date,
    bestResult: number,
    questionCount: number,
    editable?: boolean
}

export const QuizCard = ({id, title, description, complexity,
                             author, timeCreated, bestResult, questionCount, editable}: QuizCardProps) => {

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

    function setDateCreated(): string {
        return `${timeCreated.getHours()}:${timeCreated.getMinutes()}:${timeCreated.getSeconds()} | ${timeCreated.getDay()} ${getMonthName(timeCreated)} ${timeCreated.getFullYear()}`
    }

    return(
        <div className="card col-lg-6">
            <div className="card-body border-neon-primary">
                <div className="card-title">
                    <h3>{title}</h3>
                    <span
                        className={`badge badge-${setComplexity()}`}
                    >{complexity}</span>
                </div>
                <div className="card-subtitle mb-2">
                    <span>Author: {author}</span>
                    <span>{setDateCreated()}</span>
                    <span>Best pass result: {bestResult}</span>
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