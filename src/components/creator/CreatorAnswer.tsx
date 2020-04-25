
import React from 'react';
import {RightAnswer} from "../../interfaces";

interface CreatorAnswerProps {
    index: number,
    value: string,
    activeIndex: RightAnswer | unknown,
    onChangeInput(inputName: string, value: string, index?: number): void,
    onChangeRightAnswer(indexOfAnswer: RightAnswer): void
}

export const CreatorAnswer = ({index, value, activeIndex, onChangeInput, onChangeRightAnswer}: CreatorAnswerProps) => {
    return(
        <div className="input-group col-12 col-md-6 mt-3">
            <div className="input-group-prepend">
                <button
                    className={activeIndex === index ? "btn btn-primary active" : "btn btn-primary"}
                    onClick={() => onChangeRightAnswer(index)}
                >{index + 1}</button>
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