const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const list = document.querySelector('#ingredients');

const item = ingredients.map((ingredient) => {
    
    const elem = document.createElement('li');
    elem.textContent = ingredient;
    return list.append(elem);
})








