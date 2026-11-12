let ticket_balance = parseFloat(prompt("Qual o saldo do bilhete: "))
let trips = 0

while (ticket_balance > 5) {
    ticket_balance = ticket_balance - 5
    trips++
    
}



console.log(`O numero de viagens e ${trips} e vai sobrar R$${ticket_balance} no bilhete`)
alert(`O numero de viagens e ${trips} e vai sobrar R$${ticket_balance} no bilhete`)