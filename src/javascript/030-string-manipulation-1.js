let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, World!`;
console.log(singleQuote, doubleQuote, templateLiteral); // Output: Hello World Hello, World!

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName); // Output: Full Name: John Doe

// Template Literals
let age = 25;
let greeting = `Hello, my name is ${firstName} ${lastName}, and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John Doe, and I am 25 years old.

let message = "JavaScript is awesome!";
console.log("Length:", message.length); // Output: 22

console.log(message.toUpperCase()); // Output: JAVASCRIPT IS AWESOME!

console.log(message.toLowerCase()); // Output: javascript is awesome!

let slicedMessage = message.slice(0, 10);
console.log("Sliced Message:", slicedMessage); // Output: JavaScript

console.log("Index of 'is':", message.indexOf("is")); // Output: 11


let newMessage = message.replace("awesome", "fun");
console.log(newMessage); // Output: JavaScript is fun!

let words = message.split(" ");
console.log("Words Array:", words); // Output: [ 'JavaScript', 'is', 'awesome!' ]
