function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo: ")
    const altura = prompt("Informe a altura do trinângulo: ")
    return base * altura / 2
}

function calcularAreaRetângulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado: ")
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapezio: "))
    const altura = prompt("Informe a altura do trapezio: ")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do circulo: ")
    return (3.14 * raio * raio)
}

// Criando um menu
function menuExibir() {
    return prompt (
        "Calculadora Geométrica\n" +
        "1. Calcular área do triângulo.\n" +
        "2. Calcular área do retâmgulo.\n" +
        "3. Calcular área do quadrado.\n" +
        "4. Calcular área do trapézio.\n" +
        "5. Calcular área do circulo.\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
         opcao = menuExibir()
         let resultado

         switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetângulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
             break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Finalizando...")
                break
            default:
                alert("Opção inválida!")
                break;
         }

         if (resultado) {
            alert("Resultado: " + resultado)
         }
       
        } while (opcao !== "6")
    }
    
    executar()
