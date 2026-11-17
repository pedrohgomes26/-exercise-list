for (let minutes = 8 * 60 ; minutes <= 12 * 60; minutes += 15) {
    let hours = Math.floor(minutes / 60)
    let min = minutes % 60

    // console.log(min)
    h = String(hours).padStart(2, '0')
    m = String(min).padStart(2, '0')

    console.log(`${h}:${m}`)
    
}