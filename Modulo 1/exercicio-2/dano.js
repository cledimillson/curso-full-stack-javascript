alert("Eu vou conseguir aprender a programar como ninguem ja mais conseguiu.")

const atavante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = prompt("Qual é o seu poder de aaque? ")

const defenseor = prompt("Qual é o nome do personagem defensor? ")
let pontosDevida = prompt("Quantos pontos de vida ele possui? ")
const poderDeDefesa = prompt("Qual é o seu poder de defesa? ")
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDevida -= danoCausado

alert(atacante + "causou " + danoCausado + " pontos de dano em " + defenseor )
alert(atacane + "\npoder de ataque: " + poderDeAtaque + "\n\n" + defenseor + "\npontos de vida: " + pontosDevida +
"\npoder de defesa: " + poderDeDefesa + "\npossui escudo: " + possuiEscudo)