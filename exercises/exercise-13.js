let note_1 = parseFloat(prompt("Qual a primeira nota: "))
let note_2 = parseFloat(prompt("Qual a segunda nota: "))
let frequency = Number(prompt("Qual a % de frequencia do aluno: "))

let average = (note_1 + note_2) / 2

if (frequency < 75) {
    console.log("Reprovado")
    alert("Reprovado")
} else if (frequency > 90) {
    if (average === 10) {
        console.log("Não tem como aumentar a nota")
        console.log(`Aprovado com nota ${average}`)
        alert("Não tem como aumentar a nota")
        alert(`Aprovado com nota ${average}`)
    } else {
        average = average + 0.5
        console.log(`Aprovado com nota ${average}`)
        alert(`Aprovado com nota ${average}`)
    }
    
} else {
    if (average >= 6) {
    console.log(`Aprovado com nota ${average}`)
    alert(`Aprovado com nota ${average}`)
} else {
    console.log("Reprovado")
    alert("Reprovado")
}
}

