
import React, {ChangeEvent} from 'react';

interface FinderProps {
    title: string,
    finder: string,
    setFinder(value: string): void
}

export const Finder = ({title, finder, setFinder}: FinderProps) => {

    const changeHandle = (value: string): void => {
        setFinder(value);
    };

    return(
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white" id="finder">{title}</span>
            </div>
            <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="finder"
                placeholder="Start typing..."
                value={finder}
                onChange = {e => changeHandle(e.target.value)}
            />
        </div>
    )
};