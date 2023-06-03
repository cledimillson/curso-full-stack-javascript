const arr = ["Frodo", "Sam", "Merry", "Pippin", "Ganda"]
console.log(arr)

// Adicionar elementos
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// Unchift "Adiciona um objeto no inicio da lista"
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Removendo Elemento
// pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// Remover o primeiro Elemento da lista
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisa por um elemento na lista
// includes -> pesquisa se existe um elemento na lista
const inclui = arr.includes("Ganda")
console.log(inclui)

// Pesquisar por indice
// indexof
const indice = arr.indexOf("Ganda")
console.log(indice)

// Corrtar e Contatenar
// slice -> significa cortar
const hobbis = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbis)
console.log(outros)

// Concat
const sociedade = hobbis.concat(outros, "Boromir")
console.log(sociedade)

//Substitui dos elemento
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "gangs")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os elementos
for (let inidice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log = elemento + " Se encontra na posição " +
    console.log(elemento + " Se encontra na posição " + indice)
}