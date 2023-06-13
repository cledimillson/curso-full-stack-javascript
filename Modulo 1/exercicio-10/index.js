const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        // 1. nome, (Xcandidatos).
        textoFinal += indice + ", "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos\n";
        return textoFinal
    }, "");
    alert(vagasEmTexto);
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:");
    const descricao = prompt("Informe uma descrição para a vaga:");
    const dataLimite = prompt("Informe uma data limite (dd//mm/aaaa para a avaga:");
    
    const confirmacao = confirm (
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []};
        vagas.push(novaVaga)
        alert("vaga criada.")
    }
}

function exebirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir>");

    if (indice >= vagas.length || indice < 0) {
        alert("Indice inválido")
        return
    }

    const vaga = vagas[indice];

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n -" + candidato
    }, "");

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrução: " + vaga.descricao +
        "\nData Limite:" + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto 
    )
}

function inscreverCadidato() {
    const candidato = prompt("Informe o nome do (a) candidato(a): ");
    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm (
        "Tem certeza que deseja excluir essa vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de vaga de emprego: " +
        "\n\nEscolha uma das opções:" +
        "\n1. Lista vagas disponiveis:" +
        "\n2. Criar uma nova vaga:" +
        "\n3. Visualizar uma vaga:" +
        "\m4. Inscrever um candidato(a):" +
        "\n5. Excluir uma vaga:" +
        "\n6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exebirVaga()
                break
            case "4":
                inscreverCadidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção invalido.")
        }
    } while (opcao !== "6")
}
executar()