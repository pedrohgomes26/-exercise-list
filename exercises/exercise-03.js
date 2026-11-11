let file_size = Number(prompt("Quantos gigas tem o arquivo: "))

let internet_speed = Number(prompt("Qual a velocidade da sua internet em Mbps: "))

file_size = file_size * 8192
let time = file_size / internet_speed
time = time / 60

console.log(`O tempo de download vai ser ${time.toFixed(2)} minutos`)