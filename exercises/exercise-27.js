let battery = 100
let cost = Number(prompt("Qual o gasto de bateira por hora "))
let hour = 0
let economy_mode = 0

console.log(cost)

if (cost === isNaN) {
    battery = 0
}

while (battery > 0) {
    

    for (let i = 0; i < cost; i++) {
        if (battery === 15) {
            economy_mode = hour
        }
        
        if (battery <= 15) {
            battery = battery - 0.5
        } 
        else {
                battery = battery - 1
            }
            
        }
    hour++

}
    
console.log(hour)
console.log(economy_mode)

alert(`O modo economia ligou em ${economy_mode} horas e a bateria durou ${hour} horas`)