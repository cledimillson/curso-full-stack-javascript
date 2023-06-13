const numero = prompt (
    "Olá, eu sou o robô da tabuada!\n" +
    "Informe o número da tabuada desejada(a/o): "
)

let resultado = " "

for (let fator = 1; fator <= 10; fator++) {
    resultado += "  " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("O resultado da tabuada de " +  numero + ":\n\n " + resultado)