import React from 'react';
import {Order} from "../interfaces";
import {OrderOpt} from "./OrderOpt";

interface OrderOptionsProps {
    orderType: Order,
    setOrder(type: Order): void
}

export const OrderOptions = ({orderType, setOrder}: OrderOptionsProps) => {

    const onChangeHandler = (e: {target: HTMLInputElement}) => {
        switch(e.target.value){
            case 'default':
                setOrder(Order.default);
                break;
            case 'questions':
                setOrder(Order.questions);
                break;
            case 'dataCreated':
                setOrder(Order.dataCreated);
                break;
            case 'complexity':
                setOrder(Order.complexity);
                break;
            default:
                setOrder(Order.default);
                break;
        }
    };

    function renderOpts() {
        return Object.keys(Order).map((opt, index): JSX.Element => {
            return (
                <OrderOpt
                    key={index}
                    // @ts-ignore
                    valueToShow={Order[opt as any]}
                    value={opt as Order}
                    orderType={orderType}
                    onChangeHandler={onChangeHandler}
                />
            )
        })
    }

    return(
        <>
            <h3>Order by: </h3>
            <div className="order-options-container btn-group btn-group-toggle">
                {renderOpts()}
            </div>
        </>
    )
};