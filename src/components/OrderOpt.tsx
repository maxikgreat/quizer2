import React from 'react';
import {Order} from "../interfaces";

interface OrderOptProps {
    valueToShow: string,
    value: Order,
    orderType: Order,
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