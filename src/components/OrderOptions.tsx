import React from 'react';

export const OrderOptions = () => {
    return(
        <div className="order-options-container btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary active">
                <input type="radio" name="options" id="option1" checked /> Default
            </label>
            <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" /> By data created
            </label>
            <label className="btn btn-primary">
                <input type="radio" name="options" id="option3" /> By complexity
            </label>
        </div>
    )
};