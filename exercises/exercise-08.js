let ticket = 40
let age = Number(prompt("Qual sua idade: "))
let day = prompt("Qual dia da semana e hoje: ")
let student = prompt("Você e estudante?: ")

if (age <= 12 || age >= 60 || student === "s" || day === "terça") {
    ticket = ticket / 2
    console.log(`Sua entrada e meia então vai ficar R$${ticket}`)
    alert(`Sua entrada e inteira vai ficar ${ticket}`)
} else {
    console.log(`Sua entrada e inteira vai ficar ${ticket}`)
    alert(`Sua entrada e inteira vai ficar ${ticket}`)
}