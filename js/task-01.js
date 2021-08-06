const categoryCount = document.querySelectorAll('.item').length;
console.log('Всего категорий', categoryCount);

const CategoryArr = document.querySelectorAll('.item');
// -------------------------------------------------------
    
CategoryArr.forEach((item) => {
    const CategoryTitle = item.firstElementChild.textContent;
    const numberElem = item.firstElementChild.nextElementSibling.children.length;
    console.log(`Категория: ${CategoryTitle}, Количество элементов: ${numberElem}`);
})


