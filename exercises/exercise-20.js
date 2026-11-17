for (let minutes = 8 * 60 ; minutes <= 12 * 60; minutes += 15) {
    let hours = Math.floor(minutes / 60)
    let min = minutes % 60

    
    if (hours < 10 && min < 10) {
        console.log(`0${h}:0${m}`)
    } else if (hours < 10) {
        console.log(`0${h}:${m}`)
    } else if (min < 10) {
        console.log(`${h}:0${m}`)
    }
    
    console.log(`${h}:${m}`)
}