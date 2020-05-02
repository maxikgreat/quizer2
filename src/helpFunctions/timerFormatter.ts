
export function timerFormatter(timer: number): string {
    let formattedMinutes = new Date(timer).getMinutes();
    let formattedSeconds = new Date(timer).getSeconds();
    return `${formattedMinutes < 10 ? '0' + formattedMinutes : formattedMinutes}:${formattedSeconds < 10 ? '0' + formattedSeconds : formattedSeconds}`
}