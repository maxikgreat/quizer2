import React from 'react';
import {Complexity} from "../interfaces";
import {dateFormatter} from "../helpFunctions";
import {useHistory} from 'react-router-dom';
import {timerFormatter} from '../helpFunctions';
import {useDispatch} from 'react-redux';
import {deleteQuiz} from '../redux/actions';

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
    
    const dispatch = useDispatch();
    const history = useHistory();

    function setComplexity(): string {
        switch (complexity) {
            case Complexity.easy:
                return 'success';
            case Complexity.medium:
                return 'warning';
            case Complexity.hard:
                return 'danger';
            default:
                return 'primary'
        }
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
                    <span>Author:<br/>{author}</span>
                    <span>{dateFormatter(timeCreated)}</span>
                    <span>Best pass result: <br />{
                        timerFormatter(bestResult) === "00:00"
                        ? 'No results'
                        : timerFormatter(bestResult)
                    }</span>
                </div>
                <p className="card-text">{description}</p>
                <div className="card-footer">
                    {editable
                        ? <>
                            <div className="buttons-container">
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => dispatch(deleteQuiz(id))}
                                >Delete</button>
                            </div>
                            <span className="questions-xs-hide">{questionCount} questions</span>
                        </>
                        : <>
                            <button 
                                className="btn btn-secondary"
                                onClick={() => history.push(`/quiz/${id}`)}
                            >Start</button>
                            <span className="questions">{questionCount} questions</span>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};