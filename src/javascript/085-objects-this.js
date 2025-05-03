let employee = {
    name: "Bob",
    position: "Developer",
    greet: function() {
        return `Hello, my name is ${this.name} and I work as a ${this.position}.`;
    }
};

console.log(employee.greet());
// Output: Hello, my name is Bob and I work as a Developer.
