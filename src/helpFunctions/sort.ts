import {Complexity, OrderFull, OrderType, Quiz} from "../interfaces";

export function sort(order: OrderFull, collection: Quiz[]): Quiz[] {
    switch(order.type){
        case OrderType.dataCreated:
            collection.sort((leftHand, rightHand) => {
                return leftHand.timeCreated > rightHand.timeCreated ? -1 : 1
            });
            return order.direction ? collection.reverse() : collection;
        case OrderType.questions:
            collection.sort((leftHand, rightHand) => {
                return leftHand.questionCount > rightHand.questionCount ? -1 : 1
            });
            return order.direction ? collection.reverse() : collection;
        case OrderType.complexity:
            const collectionWithNumbers = collection.map((quiz: Quiz): {quiz: Quiz, value: number} => {
                if(quiz.complexity === Complexity.easy) {
                    return {quiz, value: 0}
                } else if(quiz.complexity === Complexity.medium) {
                    return {quiz, value: 1}
                } else {
                    return {quiz, value: 2}
                }
            })

            collectionWithNumbers.sort((leftHand, rightHand): number => {
                return leftHand.value > rightHand.value ? 1 : -1;
            });

            const readyCollection = collectionWithNumbers.map((quizItem: {quiz: Quiz, value: number}): Quiz => {
                return quizItem.quiz
            })

            return order.direction ? readyCollection.reverse() : readyCollection;
    }
}