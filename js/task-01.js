const categoryCount = document.querySelectorAll('.item').length;
console.log('Всего категорий', categoryCount);

const CategoryArr = document.querySelectorAll('.item');

const firstCategoryTitle = CategoryArr[0].firstElementChild.textContent;
const firstCategoryCount = CategoryArr[0].children[1].children.length;
console.log(`Категория: ${firstCategoryTitle}, Количество элементов: ${firstCategoryCount}`);

const secondCategoryTitle = CategoryArr[1].firstElementChild.textContent;
const secondCategoryCount = CategoryArr[1].firstElementChild.nextElementSibling.children.length;
console.log(`Категория: ${secondCategoryTitle}, Количество элементов: ${secondCategoryCount}`);


const thirdCategoryTitle = CategoryArr[2].firstElementChild.textContent;
const thirdCategoryCount = CategoryArr[2].children[1].children.length;

console.log(`Категория: ${thirdCategoryTitle}, Количество элементов: ${thirdCategoryCount}`);


