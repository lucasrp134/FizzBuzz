const box = document.querySelector('.box');
const user = document.querySelector('.username');
const button = document.querySelector('.button_');
let newScore = 0;
let score = 0; // Initialize score variable
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

function addNumber() {
    number += 1;
    if (number % 3 === 0 && number % 5 === 0) {
        box.textContent = 'FizzBuzz';
    } else if (number % 3 === 0) {
        box.textContent = 'Fizz';
    } else if (number % 5 === 0) {
        box.textContent = 'Buzz';
    } else {
        box.textContent = number;
    }
}

button.addEventListener('click', addNumber);
