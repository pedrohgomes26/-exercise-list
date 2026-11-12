let bill = parseFloat(prompt("Quanto foi a conta: "))

let people_number = Number(prompt("São quantas pessoas: "))

let service_charge = prompt("Vai ter os 10% do garçom s/n: ")

if (service_charge === "s") {
    let service_cost = bill * 0.10

    console.log(`A conta ficou R$${bill} no total`)

    bill = (bill + service_cost) / people_number

    alert(`A conta ficou R$${bill.toFixed(2)} para cada`)
    console.log(`A conta ficou R$${bill} para cada`)
} else {
    console.log(`A conta ficou R$${bill} no total`)
    bill = bill / people_number
    
    alert(`A conta ficou R$${bill.toFixed(2)} para cada`)
    console.log(`A conta ficou R$${bill} para cada`)
}