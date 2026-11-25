let next = "s"
let item = parseFloat(prompt("Qual o preço do produto"))
let high_item = 0
let count_items = 1
let total = 0

next = prompt("Deseja continuar s ou fim")

if (next == "s") {
    let new_item = parseFloat(prompt("Qual o preço do produto"))
    count_items++
    next = prompt("Deseja continuar s ou fim")
    total = new_item
}

if (new_item > item  ) {
        high_item = new_item
    } else {
        high_item = item
    }
    if (new_item > high_item) {
        high_item = new_item
    }


while (next == "s") {
    
    new_item = parseFloat(prompt("Qual o preço do produto"))

    count_items++

    
    
    if (new_item > item  ) {
        high_item = new_item
    } else {
        high_item = item
    }
    if (new_item > high_item) {
        high_item = new_item
    }

    
    total = total + new_item


    next = prompt("Deseja continuar s ou fim")
}
total = total + item

if (total > 300) {
    let discount = total * 0.10
    total = total - discount
    alert(`No total foram ${count_items} itens, o item mais caro foi R$${high_item} e o valor total com um desconto de 10% foi R$${total}`)
} else {
    alert(`No total foram ${count_items} itens, o item mais caro foi R$${high_item} e o valor total foi R$${total}`)
}




console.log(count_items)
console.log(high_item)
console.log(total)

