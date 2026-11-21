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