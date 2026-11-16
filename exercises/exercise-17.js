let status_order = prompt("Qual o status do seu pedido\n P(Pendente)\n A(Aceito)\n S(Saiu para entrega)\n E(Entregue)\n C(Cancelado)")

switch (status_order) {
    case "P":
    case "A":
        let cancel = prompt("deseja fazer o cancelamento do seu pedido s/n: ")

        if (cancel == "s") {
            console.log("Seu pedido foi cancelado e estamos fazendo rembolso")
            alert("Seu pedido foi cancelado e estamos fazendo rembolso")
        } else {
            if (status_order == "P") {
                console.log("Seu pedido esta sendo confirmado")
                alert("Seu pedido esta sendo confirmado")
            } else if (status_order == "A") {
                console.log("Seu pedido esta sendo preparado")
                alert("Seu pedido esta sendo preparado")
            }
        }
        break;
    case "S":
        console.log("Seu pedido ja saiu para entrega e esta em destino a sua localização")
        alert("Seu pedido ja saiu para entrega e esta em destino a sua localização")
        break;
    case "E":
        console.log("Seu pedido foi entregue")
        alert("Seu pedido foi entregue")
        break;
    case "C":
        console.log("Seu pedido foi cancelado")
        alert("Seu pedido foi cancelado")
        break;
    default:
        break;
}
