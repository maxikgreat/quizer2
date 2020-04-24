import {OrderFull, OrderType, Quiz} from "../interfaces";

export function sort(order: OrderFull, collection: Quiz[]): Quiz[] {
    switch(order.type){
        case OrderType.dataCreated:
            collection.sort((leftHand, rightHand) => {
                return leftHand.timeCreated > rightHand.timeCreated ? 1 : -1
            });
            return order.direction ? collection.reverse() : collection;
        case OrderType.questions:
            collection.sort((leftHand, rightHand) => {
                return leftHand.questionCount > rightHand.questionCount ? -1 : 1
            });
            return order.direction ? collection.reverse() : collection;
        case OrderType.complexity:
            collection.sort((leftHand, rightHand) => {
                return leftHand.complexity > rightHand.complexity ? -1 : -1
            });
            return order.direction ? collection.reverse() : collection;
    }
}