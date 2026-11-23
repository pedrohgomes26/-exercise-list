let people = Number(prompt("Quantas pessoas vão votar:"))
const votes = []

let cand1 = 0
let cand2 = 0
let cand3 = 0
let nulo = 0

for (let i = 0; i < people; i++) {
    let vote = Number(prompt("Vote em um dos candidatos 1, 2 ou 3, ou 0 para nulo:"))
    votes.push(vote)
    
}

for (let i = 0; i < votes.length; i++) {
    const element = votes[i];
    if (element === 1) {
        cand1++
    } else if (element === 2) {
        cand2++
    } else if (element === 3) {
        cand3++
    } else if (element === 0) {
        nulo++
    }

}

console.log("Lista de votos:", votes);
console.log(`Candidato 1: ${cand1} votos`);
console.log(`Candidato 2: ${cand2} votos`);
console.log(`Candidato 3: ${cand3} votos`);
console.log(`Nulos: ${nulo} votos`);

if (cand1 > cand2 && cand1 > cand3 && cand1 > nulo) {
    console.log(`O candidato 1 venceu com ${cand1} votos`);
} else if (cand2 > cand1 && cand2 > cand3 && cand2 > nulo) {
    console.log(`O candidato 2 venceu com ${cand2} votos`);
} else if (cand3 > cand1 && cand3 > cand2 && cand3 > nulo) {
    console.log(`O candidato 3 venceu com ${cand3} votos`);
} else if (nulo > cand1 && nulo > cand2 && nulo > cand3) {
    console.log(`Votos nulos venceram com ${nulo} votos`);
} else {
    console.log("Deu empate");
}