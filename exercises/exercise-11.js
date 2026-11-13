let plan_a = 20
let plan_b = 5

let internet_use = Number(prompt("Quantos gigas você gasta por mês: "))

if (internet_use <= plan_b) {
    console.log("O plano B e o melhor para você com apenas R$30 você tem 5 GB e por R$3 adicionais você tem mais 1GB extra")
} else if (internet_use <= plan_a) {
    console.log("O plano A e o melhor para você por apenas R$25 a mais que o plano B você tem 15GB a mais")
} else {
    console.log("Nossos planos não cobrem mais que 20GB")
}