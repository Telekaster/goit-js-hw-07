// Забираем данные из input
const input = document.querySelector('input')
const arr = [];
let geometry = 20;


function getValue() {
console.log('Ввели:',input.value);
    console.log('Преобразовали к числу:',Number(input.value));

    for (let i = 1; i <= input.value; i+=1) {
        arr.push(i)
    }
    console.log('Получили массив:', arr);
    
    
        

// ------------------------------------------
// Создаём DIV
    
    arr.map(item => {
        console.log('Создаём <div>');
        createBoxes()
    })    
}

function createBoxes(amount) {
        
    const createDiv = document.createElement('div');
    createDiv.classList.add('action')
   
    // background-color
    const randomRed = Math.round(Math.random() * (256 - 0) + 0);
    const randomGreen = Math.round(Math.random() * (256 - 0) + 0);
    const randomBlue = Math.round(Math.random() * (256 - 0) + 0);
    console.log('Значение R', randomRed);
    console.log('Значение G', randomGreen);
    console.log('Значение B',randomBlue);
    createDiv.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    // height
    arr.map(() => {
        geometry += 10;
        console.log('Геометрия', geometry);
    })
    createDiv.style.height = `${geometry}px`;

    // width
    createDiv.style.width = `${geometry}px`;



    // Вставляем DIV
    const boxes = document.querySelector('#boxes')
    boxes.appendChild(createDiv);

};

// ------------------------------------------------

// Кнопка "СОЗДАТЬ"
const createBtn = document.querySelector('[data-action="render"]');
createBtn.addEventListener('click', getValue)
// ----------------------------------------------------

// Кнопка "СТЕРЕТЬ"
const removeBtn = document.querySelector('[data-action="destroy"]')
function removeDiv() {
    boxes.innerHTML = '';
    input.value = '';
}

removeBtn.addEventListener('click', removeDiv)

// --------------------------------------------
