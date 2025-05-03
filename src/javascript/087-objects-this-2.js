let player = {
    name: "Cristiano Ronaldo",
    goals: 700,
    introduce: function() {
        console.log(`I am ${this.name} and I have scored ${this.goals} goals.`);
    }
};

player.introduce(); // Output: I am Cristiano Ronaldo and I have scored 700 goals.
