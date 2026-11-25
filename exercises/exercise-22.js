let word = prompt("Insira uma palavra").toLowerCase()

const inverse = []


for (let i = word.length; i >= 0; i--) {
    inverse.push(word[i])
}

let palidrome = inverse.join("")
console.log(palidrome)

if (word === palidrome) {
    alert(`${word} é um palíndromo`)
} else {
    alert(`${word} não é um palíndromo`)
}