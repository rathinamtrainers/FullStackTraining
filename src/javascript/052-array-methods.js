
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log("After push:", numbers); // Output: [1, 2, 3, 4, 5]

let removed = numbers.pop();
console.log("After pop:", numbers);
console.log("Removed element:", removed);

let squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared); // Output: [1, 4, 9, 16]

numbers = [5, 12, 8, 130, 44];
let largeNumbers = numbers.filter(num => num > 10);
console.log("Filtered numbers:", largeNumbers); // Output: [12, 130, 44]

let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


fruits.forEach(fruit => console.log(fruit));


