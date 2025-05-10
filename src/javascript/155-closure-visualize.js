function outer() {
    let message = "Hello";

    return function inner() {
        console.log(message);
    };
}

const greet = outer();
greet(); // "Hello"


