let investment_value = parseFloat(prompt("Qual o valor investido:"))
let investment_income = Number(prompt("Qual a taxa de rendimento mensal:"))

let investment_double = investment_value * 2
let mounths = 0

let investment_percentage = investment_income / 100
let investment_increase = 0


while (investment_increase < investment_double) {
    mounths++

    let increase = investment_value * investment_percentage
    investment_increase = investment_value + increase

    console.log(investment_increase)    
}
console.log(`vão ser necessarios ${mounths} meses para o valor ${investment_value} dobrar para ${investment_increase}`)
