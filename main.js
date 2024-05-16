const box = document.querySelector('.box');
const user = document.querySelector('.username');
const button = document.querySelector('.button_');
let newScore = 0;
let score = 0; // Initialize score variable
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Function to fetch the current score from the API
function fetchScore(username) {
    const url = `http://basic-web.dev.avc.web.usf.edu/${username}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch score');
            }
            return response.json();
        })
        .then(data => {
            score = data.score; // Update score variable with the fetched score
            updateScoreDisplay(); // Update score display on the webpage
            newScore = score; // Use the retrieved score as the new initial score
        })
        .catch(error => {
            console.error('Error fetching score:', error);
        });
}

// Function to update the score on the API server
function updateScore(username, score) {
    const url = `http://basic-web.dev.avc.web.usf.edu/${username}`;
    const data = { score: score };

    // Send POST request to update score
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update score');
        }
        console.log('Score updated successfully');
    })
    .catch(error => {
        console.error('Error updating score:', error);
    });
}

//function to update score and username display
function updateScoreDisplay() {
    box.textContent = score;
    user.textContent = username
}

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
