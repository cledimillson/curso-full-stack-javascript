const personagem = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    { nivel: 28, nome: "Garosh", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "paladino"},
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "maga"},
    { nivel: 39, nome: "Tyrande", raca: "Elfo", classe: "Sacerdotisa"},
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"}

]

// map -> cria um novo array

//const nomes = []

//for (let i = 0; i < personagem.length; i++) {
 //   nomes.push(personagem[i].nome)
//}

// console.log(nomes)

const Orc = personagem.filter(function (personagem) {
    return personagem.raca === "Orc";
});

console.log(Orc);

// Reduce

const nivelTotal = personagem.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0);

console.log(nivelTotal);

const racas = personagem.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado;
}, {});

console.log(racas)

// sort --> ordenar objetos

personagem.sort(function (a, b) {
    return a.nivel - b.nivel;
    
})

console.log(personagem);