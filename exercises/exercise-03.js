let file_size = Number(prompt("Quantos gigas tem o arquivo: "))

let internet_speed = Number(prompt("Qual a velocidade da sua internet em Mbps: "))

file_size = file_size * 8192
let minutes = file_size / internet_speed
let seconds = Math.round(minutes % 60)
minutes = Math.floor(minutes / 60)


console.log(`O tempo de download vai ser ${minutes} minutos e  ${seconds} segundos`)
alert(`O tempo de download vai ser ${minutes} minutos e  ${seconds} segundos`)