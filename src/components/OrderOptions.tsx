import React from 'react';
import {OrderDirection, OrderFull, OrderType} from "../interfaces";
import {OrderOpt} from "./OrderOpt";
import {Switcher} from "./UI/Switcher";

interface OrderOptionsProps {
    order: OrderFull,
    setOrder(order: OrderFull): void
}

export const OrderOptions = ({order, setOrder}: OrderOptionsProps) => {

    const onChangeHandler = (e: {target: HTMLInputElement}) => {
        switch(e.target.value){
            case 'dataCreated':
                setOrder({...order, type: OrderType.dataCreated});
                break;
            case 'questions':
                setOrder({...order, type: OrderType.questions});
                break;
            case 'complexity':
                setOrder({...order, type: OrderType.complexity});
                break;
        }
    };

    const onSwitchOrder = (): void => {
        if(order.direction === OrderDirection.asc) {
            setOrder({...order, direction: OrderDirection.desc})
            return
        } else {
            setOrder({...order, direction: OrderDirection.asc})
            return
        }
    }

    function renderOpts() {
        return Object.keys(OrderType).map((opt, index): JSX.Element => {
            return (
                <OrderOpt
                    key={index}
                    // @ts-ignore
                    valueToShow={OrderType[opt as any]}
                    value={opt as OrderType}
                    orderType={order.type}
                    onChangeHandler={onChangeHandler}
                />
            )
        })
    }

    return(
        <>
            <div className="order-options-header">
                <h3 className="neon-text-small">Order by: </h3>
                <Switcher
                    optionsLabel={order.direction}
                    onSwitchHandler={onSwitchOrder}
                />
            </div>
            <div className="order-options-container btn-group btn-group-toggle">
                {renderOpts()}
            </div>
        </>
    )
};