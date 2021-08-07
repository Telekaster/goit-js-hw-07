// Забираем данные из input
const input = document.querySelector('input')
const arr = [];
let geometry = 20;


function getValue() {

    for (let i = 1; i <= input.value; i+=1) {
        arr.push(i)
    }

// ------------------------------------------
// Создаём DIV
    
    arr.map(item => {
   
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
    createDiv.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    // height
    arr.map(() => {
        geometry += 10;
       
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
