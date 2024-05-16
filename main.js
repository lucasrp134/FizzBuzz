const box = document.querySelector('.box');
const user = document.querySelector('.username');
const button = document.querySelector('.button_');
let newScore = 0;
let score = 0; // Initialize score variable
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

//definition of addNumber function to increment score
function addNumber() {
    newScore += 1;

    if (newScore % 3 === 0 && newScore % 5 === 0) {
        box.textContent = 'FizzBuzz';
    } else if (newScore % 3 === 0) {
        box.textContent = 'Fizz';
    } else if (newScore % 5 === 0) {
        box.textContent = 'Buzz';
    } else {
        box.textContent = newScore;
    }
    // Update URL with the new score
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('score', newScore);
    history.replaceState(null, null, `?${urlParams.toString()}`);

    // Update score on the API server
    updateScore(username, newScore);
}

// Fetch current score from the API when the page loads
fetchScore(username)
    .catch(error => {
        console.error('Error:', error);
    });

// Add event listener for button click using addNumber function
button.addEventListener('click', addNumber);
