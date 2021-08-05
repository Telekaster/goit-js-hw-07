const input = document.querySelector('#font-size-control');
console.log(input);

const text = document.querySelector('#text');

function fontChange() {

    text.style.fontSize = `${input.value}px`;
}

input.addEventListener('input', fontChange)