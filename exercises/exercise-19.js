let energy_counsume = Number(prompt("Qual seu consumo de energia em kWh: "))
let flag = prompt("Qual a bandeira: ").toLowerCase()

let consume_value = 0.8
let total = 0


switch (flag) {
    case "verde":
        total = consume_value * energy_counsume
        console.log(total)
        alert(`O total com bandeira ${flag} vai ser R$${total.toFixed(2)}`)
        break
    case "amarela":
        let additional_yellow_flag = energy_counsume * 0.02
        consume_value = consume_value + additional_yellow_flag
        total = consume_value * energy_counsume
        console.log(total)
        alert(`O total com bandeira ${flag} vai ser R$${total.toFixed(2)}`)
        break;
    case "vermelha1":
        let additional_red1_flag = energy_counsume * 0.04
        consume_value = consume_value + additional_red1_flag
        total = consume_value * energy_counsume
        console.log(total)
        alert(`O total com bandeira ${flag} vai ser R$${total.toFixed(2)}`)
        break
    case "vermelha2":
        let additional_red2_flag = energy_counsume * 0.08
        consume_value = consume_value + additional_red2_flag
        total = consume_value * energy_counsume
        console.log(total)
        alert(`O total com bandeira ${flag} vai ser R$${total.toFixed(2)}`)
    default:
        break;
}