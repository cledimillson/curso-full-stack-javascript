let saldo = prompt("Informe a quanidade de dinheiro inicial.")
let opcao = ""

do {
    opcao = prompt (
        "Saldo disponivel: R$ " + saldo +
        "\n1. Adicionar dinheiro." +
        "\n2. Remover dinheiro." +
        "\n3. Sair."
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado: ") )
            break
        case "2":
            saldo -= prompt("Informe o valor a ser removido: ")
            break
        case "3":
            alert("Saindo...")
        default:
            alert("Entrada inválida.")
    }

} while (opcao !== "3")