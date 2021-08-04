const value = document.querySelector('#value');

const decBtn = document.querySelector('[data-action="decrement"]');

const incBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;


function decrement () {
    counterValue -= 1;
    return value.textContent = counterValue;
}


function increment () {
    counterValue += 1;
    return value.textContent = counterValue;
}


decBtn.addEventListener('click', decrement );
incBtn.addEventListener('click', increment )

