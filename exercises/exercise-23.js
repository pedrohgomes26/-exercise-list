phrase = prompt("Digite uma frase:")

const vowel = []

let count_vowel = 0
let count_consonants = 0
let count_space = 0
let count_number = 0


for (let i = 0; i < phrase.length; i++) {
    vowel.push(phrase[i])
    
}
console.log(vowel)


for (let i = 0; i < vowel.length; i++) {
    const element = vowel[i];
    
    switch (element) {
        case "a":
            count_vowel++    

            break;
        case "e":
            count_vowel++
            break
        case "i":
            count_vowel++
            break
        case "o":
            count_vowel++
            break
        case "u":
            count_vowel++
            break
        case " ":
            count_space++
            break
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            count_number++
            break
        default:
            count_consonants++
            break;
    }

}

console.log(`O numero de consoantes e ${count_consonants} de vogais e ${count_vowel} de espaços e ${count_space} e de numeros e ${count_number}`)
alert(`O numero de consoantes e ${count_consonants} de vogais e ${count_vowel} de espaços e ${count_space} e de numeros e ${count_number}`)