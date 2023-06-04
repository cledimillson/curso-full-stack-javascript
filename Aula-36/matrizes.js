const arr = [
    "1º Nivel ", 
    ["2º Nivel ", 42, true],
    [ 
    ["3ª Nivel", "1º item", "Olá, Mundo"],
    ["3º nivel", "2º item", "Oi, mundo!"],
],
[]
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2])
console.log(arr[2][1])
console.log(arr[2][1][0])

// Outro tipo de apresentar os arrays

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]

console.table(matriz)