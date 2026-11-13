let number = prompt("Insira um numero")



// if (number === null) {
//     alert("Operação cancelada")
// }
if (number == null) {
    alert("Operação cancelada")
} 
else if (number === "") {
    alert("Nada foi digitado")
} else if (isNaN(number)) {
    alert("Valor invalido")
} else {
    let double = number * 2
    alert(`O dobro de ${number} e ${double}`)
}
