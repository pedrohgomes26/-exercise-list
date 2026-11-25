let deposit = parseFloat(prompt("Digite o deposito mensal:"))
let months = Number(prompt("Digite a quantidade de meses:"))

let rent = deposit * 0.005
let performance = deposit + rent
console.log(`o rendimento e de R$${rent.toFixed(2)} e o total agora e R$${performance.toFixed(2)}`)

for (let i = 1; i < months; i++) {
    performance = performance + deposit
    rent = performance * 0.005
    performance = performance + rent

    console.log(`o rendimento e de R$${rent.toFixed(2)} e o total agora e R$${performance.toFixed(2)}`)
    
}