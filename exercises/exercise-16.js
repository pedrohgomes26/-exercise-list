let number = Number(prompt("Digite qual você deseja saber: "))

switch (number) {
    case 200:
        console.log("HTTP 200 (OK) resposta de sucesso. Ele indica que a solicitação feita pelo navegador ou aplicativo ao servidor foi recebida, compreendida, processada e concluída com êxito.")
        break;
    case 201:
        console.log("HTTP 201 Created Indica que a solicitação feita ao servidor (geralmente um POST ou PUT) foi bem-sucedida e um novo recurso foi criado antes de o servidor responder")
        break;
    case 301:
        console.log(" É o status HTTP mais comum para o redirecionamento 301. Indica que a página ou o site foi transferido de forma definitiva para uma nova URL.")
        break;
    case 400:
        console.log("HTTP 400 Bad Request (Requisição Inválida) significa que o servidor não conseguiu processar a solicitação enviada pelo cliente (como o seu navegador ou aplicativo) porque ela contém uma sintaxe malformada, dados ausentes ou informações incorretas.")
        break
    case 401:
        console.log("código de erro HTTP 401 (Unauthorized ou Não Autorizado) significa que a solicitação não foi processada porque o usuário ou sistema não possui credenciais de autenticação válidas.")
        break
    case 403:
        console.log(" erro 403 (Forbidden / Proibido) é um código de status HTTP que indica que o servidor entendeu a sua solicitação, mas recusa-se a autorizá-la.")
        break

    case 404:
        console.log("O Erro 404 (404 Not Found) é um código de status do protocolo HTTP que significa que o servidor foi contactado com sucesso, mas o recurso ou a página solicitada não foi encontrado no endereço indicado.")
        break
    case 500:
        console.log("O Erro 500 (Internal Server Error) é um código de status HTTP que indica que o servidor encontrou uma condição inesperada e não conseguiu concluir a solicitação feita pelo navegador ou aplicativo.")
        break
    default:
        if (number > 499) {
            console.log("Catrgoria 5xx erro do servidor")
        } else if (number > 399) {
            console.log("Categoria 4xx erro")
        }   else if (number > 199) {
            console.log("Categoria 2xx sucesso")
        } 
        break;
    
}