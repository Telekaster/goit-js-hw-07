// Забираем данные из input

const input = document.querySelector('input')
input.addEventListener('input', () => {
    console.log(input.value);
    return input.value;
})









function createBoxes(amount) {

    const amountLength = [];
    
    // for (let i = 0; i < amount; i += 1){
    //     amountLength.push(i)
    // }

    return amount;


    // const createDiv = document.createElement('div');
    // createDiv.style.width = '30px';
    // createDiv.style.height = '30px';
    // createDiv.style.backgroundColor = 'orange';




    // const boxes = document.querySelector('#boxes')
    // boxes.appendChild(createDiv);

};

const createBtn = document.querySelector('[data-action="render"]')
createBtn.addEventListener('click', createBoxes)