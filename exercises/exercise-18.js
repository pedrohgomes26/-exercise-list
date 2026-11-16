let value = parseFloat(prompt("Quanto Reais deseja converter: "))
let code = prompt("Qual o codigo da moeda: ")



switch (code) {
    case "USD":
        let tax_usd = 5.5 * 0.2
        value = value + tax
        let dolar = value / 5.5
        console.log(`Você vai receber USDR$${dolar.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber USDR$${dolar.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "EUR":
        value = value + tax
        let euro = value / 6.20
        console.log(`Você vai receber EUR€${euro.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber EUR€${euro.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "ARS":
        value = value + tax
        let ars = value * 272
        console.log(`Você vai receber ARS$${ars.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber ARS$${ars.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "JPY":
        value = value + tax
        let jpy = value * 28
        console.log(`Você vai receber ¥${jpy.toFixed(2)} Ienes ja com a taxa de 2%`)
        alert(`Você vai receber ¥${jpy.toFixed(2)} Ienes ja com a taxa de 2%`)
        
        break;
    default:
        break;
}