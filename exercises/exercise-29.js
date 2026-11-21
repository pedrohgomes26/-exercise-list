let min = 1
let max = 100
let tentativas = 0
let acertou = false

alert("Pense em um número de 1 a 100. Eu vou tentar adivinhar!")

while (!acertou) {
    let chute = Math.floor((min + max) / 2)
    tentativas++

    let resposta = prompt(`Tentativa ${tentativas}: o número é ${chute}?\nDigite: maior, menor ou acertou`)

    if (resposta === null) {
        console.log("Jogo cancelado.")
        break
    }

    resposta = resposta.trim().toLowerCase()

    if (resposta === "acertou") {
        acertou = true
        console.log(`Acertei! O número era ${chute} e precisei de ${tentativas} tentativas.`)
    } else if (resposta === "maior") {
    
        min = chute + 1
    } else if (resposta === "menor") {
       
        max = chute - 1
    } else {
        alert("Resposta inválida. Digite maior, menor ou acertou.")
        tentativas--
    }

    if (min > max && !acertou) {
        alert("Algo deu errado: suas respostas foram inconsistentes.")
        break
    }
}