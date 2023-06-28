document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session');
    sessionStorage.setItem('Infor', input.value);
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
    const Infor = sessionStorage.getItem('Infor');
    alert('A informação salva é: ' + Infor)
})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local');
    localStorage.setItem('text', input.value);
    input.value = '';
})

document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text');
    alert('O texto salvo no local storange é: ' + t)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie');
    const expiration = 'expires' + new Date(2023,6,29) + ' ; '
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2');
    const expiration = 'expires' + new Date(2023,6,29) + ' ; '
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value
})