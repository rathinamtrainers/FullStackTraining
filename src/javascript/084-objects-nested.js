let student = {
    name: "Alice",
    grade: 10,
    subjects: {
        math: 90,
        science: 85,
        english: 92
    }
};

// Access nested properties
console.log("Math Score:", student.subjects.math); // Output: 90

// Update a nested property
student.subjects.science = 88;
console.log("Updated Science Score:", student.subjects.science); // Output: 88
