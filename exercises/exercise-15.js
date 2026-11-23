let final_number = Number(prompt("Qual o final da placa do carro: "))
let day = prompt("Qual dia da semana e: ").toLowerCase()
let hour = Number(prompt("Que horas são: "))

let restrict_plate = false
let valid_day = true

switch (day) {
    case "segunda":
        restrict_plate = final_number === 1 || final_number === 2
        break
    case "terca":
        restrict_plate = final_number === 3 || final_number === 4
        break
    case "quarta":
        restrict_plate = final_number === 5 || final_number === 6
        break
    case "quinta":
        restrict_plate = final_number === 7 || final_number === 8
        break
    case "sexta":
        restrict_plate = final_number === 9 || final_number === 0
        break
    case "sabado":
    case "domingo":
        restrict_plate = false 
        break
    default:
        valid_day = false
        break
}

let horario_restrito = false

if (hour >= 7 && hour < 10) {
    horario_restrito = true
} else if (hour >= 17 && hour < 20) {
    horario_restrito = true
} else {
    horario_restrito = false
}

if (valid_day === false) {
    alert("Dia invalido")
} else if (restrict_plate === true && horario_restrito === true) {
    alert("O carro não pode circular")
} else {
    alert("O carro pode circular")
}