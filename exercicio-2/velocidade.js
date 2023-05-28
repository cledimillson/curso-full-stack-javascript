const veiculo1 = prompt("Informe o nome do primeiro veiculo: ")
const velocidade1 = prompt("Informe a velocidade do primeiro veiculo: ")

const veiculo2 = prompt("Iforme o nome do segundo veiculo: ")
const velocidade2 = prompt("Informe a velocidade do segundo veiculo: ")

if (velocidade2 > velocidade1) {
    alert(veiculo1 + " é mais rapido do que " + veiculo2)

} else if (velocidade1 > velocidade2) {
    alert(veiculo2 + " é mais rapido do que " + veiculo1)

} else {
    alert(veiculo1 + " e " + veiculo2 + "Possuem velocidades iguais.")
}