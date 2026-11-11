let ticket_balance = parseFloat(prompt("Qual o saldo do bilhete: "))
let trips = 0

while (ticket_balance > 5.00) {
    ticket_balance - 5.00
    trips++
}

console.log(`O numero de viagens e ${trips} e sobrou R$${ticket_balance} no bilhete`)