function addInput() {
    const ul = document.getElementById('inputs');

    const newLi = document.createElement('li');
    newLi.className = 'list.item: ';
    newLi.innerHTML = 'Novo input: ';

    const newInput = document.createElement('input');
    newLi.type = 'text';
    newLi.name = 'input';

    newLi.appendChild(newInput);
    ul.appendChild(newLi);
}