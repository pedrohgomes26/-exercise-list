let product = "continuar"

let products_value = 0
let sells = 0
let payed = 0


let a1_stock = 3
let a2_stock = 2
let b1_stock = 2
let b2_stock = 1

while (product != "sair") {
    
    alert(
    `Codigo | Produto | Preço | Estoque
    \n A1 | Àgua | R$3,50 | ${a1_stock}
    \n A2 | Refrigerante | R$6,00 | ${a2_stock}
    \n B1 | Salgadinho | R$7,50 | ${b1_stock}
    \n B2 | Chocolate | R$5,00 | ${b2_stock}`)

    product = prompt("Qual produto você deseja?")

    switch (product) {
        case "A1":
            if (a1_stock > 0) {
                products_value = products_value + 3.50
                a1_stock--
                sells = sells++
            } else {
                alert("Esse produto acabou")
                console.log("Esse produto acabou")
            }
            break;
        
        case "A2":
            if (a2_stock > 0) {
                products_value = products_value + 6
                a2_stock--
                sells = sells++
            } else {
                alert("Esse produto acabou")
                console.log("Esse produto acabou")
            }
            break;
        case "B1":
            if (b1_stock > 0) {
                products_value = products_value + 7.50
                b1_stock--
                sells = sells++
            } else {
                alert("Esse produto acabou")
                console.log("Esse produto acabou")
            }
            break;
        case "B2":
            if (b2_stock > 0) {
                products_value = products_value + 5
                b2_stock--
                sells = sells++
            } else {
                alert("Esse produto acabou")
                console.log("Esse produto acabou")
            }
            break;
        default:
            break;
    }

    alert(`Você pegou os itens ${product} e o preço esta em R$${products_value}`)
    

    if (payed < products_value) {
        let payment = parseFloat(prompt("Insira o dinheiro"))
        payed = payment
        if (payed < products_value) {
            payed = payed + payment
        }
        product = "Continuar"
    }
}
if (payed > products_value) {
    let change = payed - products_value
}

alert(`O valor total ficou ${products_value}, você pagou R$${payed} e vai ter R$${change} de troco`)