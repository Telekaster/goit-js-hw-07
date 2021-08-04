const input = document.querySelector('input');
console.log(input);

function lengthCheck(event) {

    console.log(input.value.length);

    if (input.value.length !== 6) {
        console.log(false);
        input.classList.add('invalid')

    } else {
        console.log(true);
        input.classList.replace('invalid', 'valid')
    }
}


input.addEventListener('change', lengthCheck);


