
import React from 'react';

interface CreatorAnswerProps {
    index: number,
    value: string,
    onChangeInput(inputName: string, value: string, index?: number): void
}

export const CreatorAnswer = ({index, value, onChangeInput}: CreatorAnswerProps) => {
    return(
        <div className="input-group col-12 col-md-6 mt-3">
            <div className="input-group-prepend">
                <button className="btn btn-primary">{index + 1}</button>
            </div>
            <input
                name="answer"
                type="text"
                className="form-control"
                value={value}
                onChange={(e) => onChangeInput(e.target.name, e.target.value, index)}
            />
        </div>
    )
};