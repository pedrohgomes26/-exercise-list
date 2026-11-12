let distance = Number(prompt("Quantos km até o destino: "))
let consume = Number(prompt("Consumo do carro (km/l): "))
let liter_price = 5.4

let cost_per_km = liter_price / consume         
let roundtrip = distance * 2                     
let cost_roundtrip = cost_per_km * roundtrip    

console.log(`Custo por km R$${cost_per_km.toFixed(2)}`)
console.log(`Custo de ida e volta R$${cost_roundtrip.toFixed(2)}`)
alert(`Custo por km R$${cost_per_km.toFixed(2)}`)
alert(`Custo de ida e volta R$${cost_roundtrip.toFixed(2)}`)