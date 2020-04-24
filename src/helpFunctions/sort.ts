import {Order, Quiz} from "../interfaces";

export function sort(type: Order, collection: Quiz[]): Quiz[] {

    switch(type){
        case Order.questions:
            return collection.sort((leftHand, rightHand) => {
                return leftHand.questionCount > rightHand.questionCount ? -1 : 1
            });
        case Order.dataCreated:
            return collection.sort((leftHand, rightHand) => {
                return leftHand.timeCreated > rightHand.timeCreated ? 1 : -1
            });
        case Order.complexity:
            return collection.sort((leftHand, rightHand) => {
                return leftHand.complexity > rightHand.complexity ? -1 : -1
            });
        case Order.default:
            return collection;
    }
}