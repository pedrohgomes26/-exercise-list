let gasoline_price = parseFloat(prompt("Qual o preço da gasolina: "))
let ethanol_price = parseFloat(prompt("Qual o preço do Etanol: "))

// calulo da diferença de preço
let difference = ethanol_price / gasoline_price * 100

if (difference < 70) {
    let percentual = (gasoline_price - ethanol_price) / gasoline_price * 100
    console.log(`E Melhor abastecer com etanol a diferença e de ${percentual.toFixed(2)}%`)
    alert(`E Melhor abastecer com etanol a diferença e de ${percentual.toFixed(2)}%`)
} else {
    console.log("E melhor abastecer com gasolina")
    alert("E melhor abastecer com gasolina")
}

