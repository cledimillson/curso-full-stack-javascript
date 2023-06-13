let fila = []
let opcao = ""

do {
    let parcientes = ""
    for (let i = 0; i < fila.length; i++) {
        parcientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Parcientes:\n" + parcientes +
        "\nEscolha uma ação:\n" +
        "\n1. Novo parciente" +
        "\n2. Consultar parciente " +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novoParciente = prompt("Qual é o nome do parciente? ")
            fila.push(novoParciente)
            break
        case ("2"):
            const parcienteConsultado = fila.shift()
            if (parcienteConsultado) {
                alert(parcienteConsultado + " foi removido da fila. ")
            } else {
                alert("Não há parcientes na fila.")
            }
            break
        case ("3"):
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida.")
    }

} while (opcao != "3")