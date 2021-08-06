const input = document.querySelector('input');

const validationNumber = Number(input.getAttribute('data-length'));


function lengthCheck(event) {

    if (input.value.length !== validationNumber) {

        input.classList.add('invalid');

    } else {
       
        input.classList.replace('invalid', 'valid');
    }
}


input.addEventListener('change', lengthCheck);


