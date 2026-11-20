let height = Number(prompt("Insira a altura: "))

let ladder = ""



for (let i = 0; i < height; i++) {

    for (let j = 0; j < n - i; j++) {
        ladder += " "
    }

    for (let k = 0; k < i; k++) {
        ladder += "#"
    }
  
    console.log(ladder)
}