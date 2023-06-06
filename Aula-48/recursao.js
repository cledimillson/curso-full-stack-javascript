function dividir(num) {
    console.log(num) 
    if (num % 2 === 0) {
        dividir(num / 2)

    } else {
        return num
    }
}
function doblar(num) {
    console.log(num)
    dobrar(num * 2)
}

// dividir(40)

// doblar(1)

// factorial de 5: !5 * 4 * 3 * 2 * 1 === 5 * !4
function factorial(num) {
    console.log("Número: " + num)
    if (num === 0) { // caso base
        return 1

    } else if (num == 1) {
        return 1

    } else {
        console.log(num + " * !" + (num - 1))
        return num * factorial(num - 1)
    }
}

console.log(factorial(5))