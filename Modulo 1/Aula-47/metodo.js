let pessoa = {
    nome: "Te", 
    idade: 40,
    dizerOla() {
        console.log("Olá, Mundo! meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()