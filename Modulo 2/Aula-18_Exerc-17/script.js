const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = 'Olá, Mundo!'
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
    //input.type = input.type != 'radio' ? 'radio' : 'text'
    input.setAttribute('type', 'radio') // Muda o formato e não desfaz
})

document.getElementById('placeholder').addEventListener('click', function() {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
    input.setAttribute('disable', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.something
    console.log("O valor do atributo data-something é: + data")
    input.dataset.something = 'Algum outro valor'
    console.log("O valor do atributo something agora é: " + input.dataset.something)
})