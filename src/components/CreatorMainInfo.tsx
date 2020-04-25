
import React from 'react';
import {NewQuiz} from "../interfaces";

interface CreatorMainInfoProps {
    newQuiz: NewQuiz,
    setNewQuizState(newQuiz: NewQuiz): void
}

export const CreatorMainInfo = ({newQuiz, setNewQuizState}: CreatorMainInfoProps) => {
    return(
        <div className="main-info-container">
            <div className="form-group row">
                <div className="col-lg-6 col-12">
                    <h2>Title</h2>
                    <input type="text" className="form-control form-control-lg"/>
                    <small className="form-text text-muted">
                        Info or error text
                    </small>
                </div>
                <div className="col-lg-6 col-12">
                    <h2>Complexity</h2>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped bg-info"
                            role="progressbar"
                            style={{width: '50%'}}
                        >
                        </div>
                    </div>
                    <div className="complexity-buttons-container">
                        <button className="btn btn-success">Easy</button>
                        <button className="btn btn-secondary">Medium</button>
                        <button className="btn btn-danger">Hard</button>
                    </div>
                </div>
                <div className="col-12">
                    <h2>Description</h2>
                    <textarea className="form-control" rows={3}>
                        </textarea>
                    <small className="form-text text-muted">
                        Info or error text
                    </small>
                </div>
            </div>
        </div>
    )
};