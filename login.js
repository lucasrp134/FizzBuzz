//get function definition from API to get the stored username
function get(url) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function() {
            resolve({ status: http.status, data: JSON.parse(http.response) });
        };
        http.open("GET", url);
        http.send();
    });
}

//post function definition to store the username in the API
function post(url, data) {
    data = JSON.stringify(data);
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.onload = function() {
            resolve({ status: http.status, data: JSON.parse(http.response) });
        };
        http.open("POST", url);
        //Make sure that the server knows we're sending it json data.
        http.setRequestHeader("Content-Type", "application/json");
        http.send(data);
    });
}

// Define the login function
function login() {
    var username = document.getElementById('username').value;

    if (username === username) {
        alert('Success');
        let x = document.forms["boxForm"]["usernameBox"].value;
        if (x === "") {
            alert("Name must be filled out");
            return false;
        }
        location.href = "index.html";
    } else {
        alert('User incorrect');
    }
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
    
    //retrieve username from page
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert("Name must be filled out");
        return false;
    }
    // Call the get function to check if the user exists
    get(`http://basic-web.dev.avc.web.usf.edu/${username}`)
    .then(function(response) {
        if (response.status === 200) {
            // User exists, redirect to main page
            const username = response.data.id;
            const score = response.data.score;
            window.location.href = `index.html?username=${encodeURIComponent(username)}&score=${encodeURIComponent(score)}`;
        } else {
            
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
}