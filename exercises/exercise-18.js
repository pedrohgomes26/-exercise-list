let value = parseFloat(prompt("Quanto Reais deseja converter\n Dolar - R$5,50\n Euro - R$6,20\n Peso argentino - R$0,0040\n Iene - R$0,040"))
let code = prompt("Qual o codigo da moeda: ").toUpperCase()

console.log(code)

switch (code) {
    case "USD":
        let tax_usd = 5.5 * 0.2
        let dolar = 5.5 + tax_usd
        dolar = value / dolar
        console.log(`Você vai receber USDR$${dolar.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber USDR$${dolar.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "EUR":
        let tax_eur = 6.2 * 0.2
        let euro = 6.2 + tax_eur
        euro = value / euro
        console.log(`Você vai receber EUR€${euro.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber EUR€${euro.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "ARS":
        let tax_ars = 0.0040 * 0.2
        let ars = 272 + tax_ars
        ars = value * ars
        console.log(`Você vai receber ARS$${ars.toFixed(2)} ja com a taxa de 2%`)
        alert(`Você vai receber ARS$${ars.toFixed(2)} ja com a taxa de 2%`)
        break;
    case "JPY":
        let tax_jpy = 0.040 * 0.2
        let jpy = 28 + tax_jpy
        jpy = value * jpy
        console.log(`Você vai receber ¥${jpy.toFixed(2)} Ienes ja com a taxa de 2%`)
        alert(`Você vai receber ¥${jpy.toFixed(2)} Ienes ja com a taxa de 2%`)
        
        break;
    default:
        break;
}