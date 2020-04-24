
export function getMonthName(time: Date) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[time.getMonth()]
}