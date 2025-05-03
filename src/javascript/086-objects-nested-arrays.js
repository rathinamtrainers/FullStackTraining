let library = {
    name: "City Library",
    books: [
        { title: "JavaScript Basics", author: "John Doe" },
        { title: "CSS Essentials", author: "Jane Smith" }
    ]
};

// Accessing a nested object property
console.log("First Book Title:", library.books[0].title); // Output: JavaScript Basics

// Adding a new book
library.books.push({ title: "HTML Mastery", author: "Mark Taylor" });
console.log("Library after adding a new book:", library);
