import React from 'react';
import {OrderType} from "../interfaces";

interface OrderOptProps {
    valueToShow: string,
    value: OrderType,
    orderType: OrderType,
    onChangeHandler(e: {target: HTMLInputElement}): void
}

export const OrderOpt = ({valueToShow, value, orderType, onChangeHandler}: OrderOptProps) => {
    return(
        <label className={orderType === valueToShow ? 'btn btn-secondary active' : 'btn btn-primary'}>
            <input
                type="radio"
                value={value}
                checked={false}
                onChange={(e) => onChangeHandler(e)}
            /> {valueToShow}
        </label>
    )
};