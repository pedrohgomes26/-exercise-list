for (let minutes = 8 * 60 ; minutes <= 12 * 60; minutes += 15) {
    let hours = Math.floor(minutes / 60)
    let min = minutes % 60

    
    if (hours < 10 && min < 10) {
        console.log(`0${hours}:0${min}`)
    } else if (hours < 10) {
        console.log(`0${hours}:${min}`)
    } else if (min < 10) {
        console.log(`${hours}:0${min}`)
    } else {
        console.log(`${hours}:${min}`)
    }
    
}