let hour = Number(prompt("Qual a hora agora: "))
let minutes = Number(prompt("Quantos minutos: "))

while (hour > 24 || hour <= 0 || minutes > 59 || minutes <= 0) {
    if (hour > 24 || hour < 0) {
        hour = Number(prompt("Hora invalida insira outra: "))
    } else if (minutes > 59 || minutes < 0) {
        minutes = Number(prompt("Minuto invalido: "))
    }
}

if (hour <= 5) {
    console.log(`A hora atual e ${hour}:${minutes} tenha uma boa madrugada`)
} else if (hour < 12) {
    console.log(`A hora atual e ${hour}:${minutes} tenha um boa dia`)
} else if (hour == 18 && minutes >= 40) {
    console.log(`A hora atual e ${hour}:${minutes} tenha uma boa noite`)
} else if (hour <= 18) {
    console.log(`A hora atual e ${hour}:${minutes} tenha uma boa tarde`)
} else if (hour >= 19) {
    console.log(`A hora atual e ${hour}:${minutes} tenha uma boa noite`)
} 