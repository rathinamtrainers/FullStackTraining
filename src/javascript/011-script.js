// Displaying "Hello, World!" in the browser console
console.log("Hello, World!");

// Displaying "Hello, World!" on the webpage
document.body.innerHTML += "<p>Hello, World!</p>";

// Displaying an alert message
alert("Welcome to JavaScript!");

// Asking the user for their name and greeting them
let userName = prompt("What is your name?");
if (userName) {
    alert(`Hello, ${userName}!`);
} else {
    alert("You didn't enter your name!");
}

// Confirming the user's readiness
let isReady = confirm("Are you ready to learn JavaScript?");
console.log(isReady ? "Let's get started!" : "Take your time and come back when you're ready.");
