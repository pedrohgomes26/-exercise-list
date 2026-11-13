let wage = parseFloat(prompt("Insira seu salario: "))
let parcel = parseFloat(prompt("Insira o valor da parcela: "))

// 30% do salario
let wage_30 = wage * 0.3



if (parcel <= wage_30) {
    console.log("Emprestimo aprovado")
    alert("Emprestimo aprovado")
} else {
    console.log(`Emprestimo negado`)
    alert("Emprestimo negado")

    console.log(`A parcela maxima permitida e de R$${wage_30}`)
    alert(`A parcela maxima permitida e de R$${wage_30}`)
}