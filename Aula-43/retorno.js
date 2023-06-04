function ola() {
    let texto = "..."
    texto = "olá, mundo!"
    return texto
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
    if (idade > 18) {
        return ("Maior de idade!")
    } else {
        return ("Menor de idade!")
    }
}
console.log(maioridade(19))
console.log(maioridade(12))