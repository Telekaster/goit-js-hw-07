const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const list = document.querySelector('#ingredients');

const item = ingredients.map((ingredient) => {
   return `<li>${ingredient}</li>`;
})

list.innerHTML = item.join("");






