import React from 'react';
import {OrderDirection} from "../../interfaces";

interface SwitcherProps {
    optionsLabel: OrderDirection,
    onSwitchHandler(): void
}

export const Switcher = ({optionsLabel, onSwitchHandler}: SwitcherProps) => {
    return(
        <div className="switcher-container">
            {optionsLabel
                ? <span className="text-primary-darken">ASC</span>
                : <span className="text-secondary-darken">DESC</span>
            }
            <label className="switcher">
                <input type="checkbox" onClick = {() => onSwitchHandler()} />
                    <span className="slider"></span>
            </label>
        </div>
    )
};