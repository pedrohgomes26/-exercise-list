let next = "sim"
let item = parseFloat(prompt("Qual o preço do produto"))
let high_item = 0
let total = 0

while (next != "fim") {
    let new_item = parseFloat(prompt("Qual o preço do produto"))
    let count_items = 0
    count_items++

    total = item + new_item
    
    if (new_item > new_item ) {
        high_item = new_item
    }

    if (new_item > high_item) {
        high_item = new_item
    }

    
   next = prompt("Deseja continuar sim \n fim")


}

console.log(total)