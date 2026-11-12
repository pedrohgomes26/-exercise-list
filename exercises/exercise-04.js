let change = parseFloat(prompt("Quanto ficou o troco: "))
let note_100 = 0
let note_50 = 0
let note_20 = 0
let note_10 = 0
let note_5 = 0
let note_2 = 0
let coin_1 = 0

console.log(change)

while (change > 0) {
    
    if (change >= 100) {
        change = Math.floor(change % 100)
        note_100++
    } else if (change >= 50) {
        change = Math.floor(change % 50)
        note_50++
    } else if (change >= 20) {
        change = Math.floor(change % 20)
        note_20++
    } else if (change >= 10) {
        change = Math.floor(change % 10)
        note_10++
    }else if (change >= 5) {
        change = Math.floor(change % 5)
        note_5++
    } else if (change >=  2) {
        change = Math.floor(change % 2)
        note_2++
    } else if (change == 1) {
        change = Math.floor(change % 1)
        coin_1++
    }
}

console.log(`Você ficou com ${note_100} notas de 100
${note_50} notas de 50

${note_20} notas de 20

${note_10} notas de 10

${note_5} notas de 5

${note_2} notas de 2

${coin_1} moedas de 1 `)

alert(`Você ficou com ${note_100} notas de 100
${note_50} notas de 50

${note_20} notas de 20

${note_10} notas de 10

${note_5} notas de 5

${note_2} notas de 2

${coin_1} moedas de 1 `)