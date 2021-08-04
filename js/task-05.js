const input = document.querySelector('#name-input');

const output = document.querySelector('#name-output');
// -----------------------------------------------------

function transform(event) {

    output.textContent = event.currentTarget.value;
}


input.addEventListener('input', transform);