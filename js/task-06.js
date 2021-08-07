const input = document.querySelector('input');

const validationNumber = Number(input.getAttribute('data-length'));


function lengthCheck(event) {

    input.classList.add('invalid')


    if (input.value.length === validationNumber) {

        input.classList.replace('invalid', 'valid');

    }
}


input.addEventListener('change', lengthCheck);


