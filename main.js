const box = document.querySelector('.box');
const button = document.querySelector('.button_');
let number = 0;

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

function validateForm() {
    let x = document.forms["boxForm"]["usernameBox"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

button.addEventListener('click', addNumber);

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        usernameElement.textContent = username;
    }
});