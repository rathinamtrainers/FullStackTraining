let student = {
    name: "John Doe",
    age: 16,
    grades: {
        math: 90,
        science: 85,
        history: 88
    },
    addGrade: function(subject, grade) {
        this.grades[subject] = grade;
        console.log(`Grade added: ${subject} = ${grade}`);
    },
    getAverageGrade: function() {
        let total = 0;
        let subjects = Object.keys(this.grades);
        subjects.forEach(subject => {
            total += this.grades[subject];
        });
        return total / subjects.length;
    }
};

// Add a grade
student.addGrade("english", 92);

// Calculate average grade
console.log("Average Grade:", student.getAverageGrade()); // Output: Average Grade: 88.75
