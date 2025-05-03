// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// Convert Fahrenheit to Celsius
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// Test the functions
let celsius = 30;
let fahrenheit = 86;

console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`); // Output: 30°C is 86°F
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`); // Output: 86°F is 30°C


