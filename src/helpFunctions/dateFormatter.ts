import {getMonthName} from './';


export function dateFormatter(timeCreated: Date): string {

    const hours = timeCreated.getHours() < 10 ? '0' + timeCreated.getHours() : timeCreated.getHours();
    const minutes = timeCreated.getMinutes() < 10 ? '0' + timeCreated.getMinutes() : timeCreated.getMinutes();
    const seconds = timeCreated.getSeconds() < 10 ? '0' + timeCreated.getSeconds() : timeCreated.getSeconds();
    const day = timeCreated.getDate() < 10 ? '0' + timeCreated.getDate() : timeCreated.getDate();

    return `${hours}:${minutes}:${seconds} | ${day} ${getMonthName(timeCreated)} ${timeCreated.getFullYear()}`
}