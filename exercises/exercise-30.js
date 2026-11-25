<<<<<<< HEAD
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
=======
let estoque = { A1: 3, A2: 2, B1: 2, B2: 1 }

let faturamento = 0
let vendas = 0
let ligada = true

while (ligada) {
    let entrada = prompt(
        "=== MÁQUINA DE SNACKS ===\n" +
        "A1 - Água - R$ 3,50 (" + estoque.A1 + " un.)\n" +
        "A2 - Refrigerante - R$ 6,00 (" + estoque.A2 + " un.)\n" +
        "B1 - Salgadinho - R$ 7,50 (" + estoque.B1 + " un.)\n" +
        "B2 - Chocolate - R$ 5,00 (" + estoque.B2 + " un.)\n\n" +
        "Digite o código do produto ou 'sair':"
    )

    if (entrada === null) {
        break
    }

    let codigo = entrada.trim().toUpperCase()

    if (codigo === "SAIR") {
        ligada = false
        continue
    }

    let produto = ""
    let preco = 0

    switch (codigo) {
        case "A1":
            produto = "Água"
            preco = 3.5
            break
        case "A2":
            produto = "Refrigerante"
            preco = 6.0
            break
        case "B1":
            produto = "Salgadinho"
            preco = 7.5
            break
        case "B2":
            produto = "Chocolate"
            preco = 5.0
            break
        default:
            alert("Código inválido.")
            continue
    }

    if (estoque[codigo] === 0) {
        alert(`${produto} esgotado!`)
        continue
    }

    let inserido = 0
    let cancelou = false

    while (inserido < preco) {
        let valor = prompt(
            `${produto}: R$ ${preco.toFixed(2)}\n` +
            `Inserido: R$ ${inserido.toFixed(2)}\n` +
            `Faltam: R$ ${(preco - inserido).toFixed(2)}\n\n` +
            "Insira o dinheiro:"
        )

        if (valor === null) {
            cancelou = true
            break
        }

        let dinheiro = parseFloat(valor.replace(",", "."))

        if (isNaN(dinheiro) || dinheiro <= 0) {
            alert("Valor inválido.")
            continue
        }

        inserido += dinheiro
    }

    if (cancelou) {
        alert(`Compra cancelada. Devolvendo R$ ${inserido.toFixed(2)}.`)
        continue
    }

    let troco = inserido - preco

    estoque[codigo]--
    faturamento += preco
    vendas++

    alert(
        `Aqui está seu(sua) ${produto}!\n` +
        `Troco: R$ ${troco.toFixed(2)}`
    )
}

console.log("=== MÁQUINA DESLIGADA ===")
console.log(`Vendas realizadas: ${vendas}`)
console.log(`Faturamento total: R$ ${faturamento.toFixed(2)}`)
>>>>>>> 7e820d0d1c74b0c0260fcd24bf3a4c4744c13f53
