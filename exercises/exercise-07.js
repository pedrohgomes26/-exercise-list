let shopping_value = parseFloat(prompt("Qual o valor das compras: "))
let shopping_weight = Number(prompt("Qual o peso das compras: "))


if (shopping_value < 250) {
    if (shopping_weight <= 1) {
        console.log(`O valor total vai ficar R$${shopping_value + 15} com os R$15 de frete`)
        alert(`O valor total vai ficar R$${shopping_value + 15} com os R$15 de frete`)
    } else if (shopping_weight <= 5) {
        console.log(`O valor total vai ficar R$${shopping_value + 25} com os R25 de frete `)
        alert(`O valor total vai ficar R$${shopping_value + 25} com os R25 de frete `)
    } else {
        let surplus = (shopping_weight - 5) * 4
        console.log(`O valor total vai ficar R$${shopping_value + 25 + surplus} com os R$${25 +surplus} de frete`)
        alert(`O valor total vai ficar R$${shopping_value + 25 + surplus} com os R$${25 +surplus} de frete`)
    }

} else {
    console.log(`O frete e gratis o valor total ficou R$${shopping_value}`)
    alert(`O frete e gratis o valor total ficou R$${shopping_value}`)
}