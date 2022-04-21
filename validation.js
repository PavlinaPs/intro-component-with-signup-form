const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

let enteredEmail = document.getElementById('email');
let enteredPassword = document.getElementById('password');

const form = document.querySelector('.intro__form');
const inputs = Array.from(document.querySelectorAll('.intro__form--input'));

form.addEventListener('submit', (e) => {
    inputs.forEach(input => {
        if(input.value) {
            clearErrorMessages(input);
        } else {
            e.preventDefault()
            displayErrorMessage(input);
        } 
    });
    if(emailValidationRegex.test(enteredEmail.value)) {
            clearErrorMessages(enteredEmail);
        } else {
            e.preventDefault();
            displayErrorMessage(enteredEmail);
        }
    // add password validation
});

function clearErrorMessages(entry) {
    entry.classList.remove('error');
    entry.nextElementSibling.setAttribute('data-visible', false);
};

function displayErrorMessage(entry) {
    entry.classList.add('error');
    entry.nextElementSibling.setAttribute('data-visible', true);
}