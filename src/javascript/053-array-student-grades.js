// Array of student grades
let grades = [85, 92, 76, 81, 56, 90];

// Filter students who passed (>= 60)
let passed = grades.filter(grade => grade >= 60);
console.log("Passing Grades:", passed);

// Double all grades (extra credit)
let extraCredit = grades.map(grade => grade * 2);
console.log("Grades with Extra Credit:", extraCredit);

// Find the average grade
let total = grades.reduce((sum, grade) => sum + grade, 0);
let average = total / grades.length;
console.log("Average Grade:", average);
