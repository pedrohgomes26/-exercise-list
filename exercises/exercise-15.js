let final_number = Number(prompt("Qual o final da placa do carro: "))
let day = prompt("Qual dia da semana e: ")
let hour = Number(prompt("Que horas são: "))

let rodizio = true

switch (day) {
    case "segunda":
        if (final_number === 1 || final_number === 2) {
            rodizio = true
            break
        } else {
            rodizio = false
            break
        }
        
    case "terca":
        if (final_number === 3 || final_number === 4) {
            rodizio = true
            break
        } else {
            rodizio = false
            break
        }
        
    case "quarta":
        if (final_number === 5 || final_number === 6) {
            rodizio = true
            break
        } else {
            rodizio = false
            break
        }
        
    case "quinta":
        if (final_number === 7 || final_number === 8) {
                rodizio = true
            break
        } else {
            rodizio = false
            break
        }
        
    case "sexta":
        if (final_number === 9 || final_number === 0) {
                rodizio = true
            break
        } else {
            rodizio = false
            break
        }
    default:
        alert("Dia invalido")
        break
}

if (day === "sabado" || day === "domingo") {
    rodizio = true
}
if (hour >= 7 && hour < 10) {
        rodizio = false
} else if (hour >= 17 && hour < 20) {
    rodizio = false
} else {
    rodizio = true
}
console.log(rodizio)

if (rodizio === true) {
    alert("O carro não pode circular")
} else  {
    alert("O carro pode circular")
}
