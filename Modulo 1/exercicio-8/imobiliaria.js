const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-Vindo(a) ao Cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\nEscolha uma opção:\n1. Novo imóvel.\n2. Lista imóveis.\n3. Sair."
    )

    switch (opcao) {
        case "1": // Cria uma lista de imveis junto ao usúario
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietario do imvel:")
            imovel.quartos = prompt("Quantos quartos possui o imvel? ")
            imovel.banheiro = prompt("Quantos banheiros possui o imvel? ")
            imovel.garangem = prompt("O imovel possui garagem (Sim/Não) ")

            const confirmacao = confirm(
                "Salvar este imovel?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuaros: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiro +
                "\nPossui garagem: " + imovel.garangem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imovel salvo com sucesso!")
            } else {
                alert("Voltando ao menu.")
            }

            break

        case "2": // Exibir todos os imveis cadastrados.
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui garagem? " + imoveis[i].garangem
                )
            }
            break

        case "3":
            alert("Encerando...")
            break
        default:
            alert("Opção inválida.")
    }

} while (opcao !== "3")