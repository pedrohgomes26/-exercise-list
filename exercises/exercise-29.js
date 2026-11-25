let user_number = Number(prompt("Escolha um numero entre 1 e 100"))

response_program = 0
let min = 1
let max = 100

let trys = 0


while (response_program != user_number) {
    trys++
    console.log(trys)
    
    response_program = Math.floor(Math.random() * (max - min) ) + min
    
    console.log(response_program)
    alert(response_program)

    if (response_program === user_number) {
        break
    }

    let tip = prompt("O numero e menor ou maior?")
    

    if (tip === "menor") {
        max = response_program - 1
    } else if (tip === "maior") {
        min = response_program + 1
    }


}

alert(`o programa levou ${trys} para acertar`)