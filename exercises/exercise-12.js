let urgency = Number(prompt("Qual o nivel da urgencia: "))
let impact = Number(prompt("Qual foi o impacto: "))


while (urgency >= 4 || urgency <= 0 || impact >= 4 || impact <= 0) {
    if (urgency >= 4 || urgency <= 0) {
        urgency = Number(prompt("Numero de urgencia invalido: "))
    } else if (impact >= 4 || impact <= 0) {
        impact = Number(prompt("Numero de impacto invalido: "))
    }
}

// Soma dos numeros
let result = urgency + impact

if (result === 6) {
    console.log("P1 Crítico")
    alert("P1 Crítico")
} else if (result === 5) {
    console.log("P2 Alto")
    alert("P2 Alto")
} else if (result === 4 || result === 3) {
    console.log("P3 Médio")
    alert("P3 Médio")
} else {
    console.log("P4 Baixo")
    alert("P4 Baixo")
}