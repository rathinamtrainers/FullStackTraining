function run() {
    let balance = 1000;

    while (true) {
        console.log("\nWelcome to the ATM");
        console.log("1. Check Balance");
        console.log("2. Deposit");
        console.log("3. Withdraw");
        console.log("4. Exit");

        let choice = parseInt(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                console.log("Your balance is:", balance);
                break;
            case 2:
                let deposit = parseInt(prompt("Enter amount to deposit: "));
                balance += deposit;
                console.log("Deposited successfully. New balance:", balance);
                break;
            case 3:
                let withdraw = parseInt(prompt("Enter amount to withdraw: "));
                if (withdraw > balance) {
                    console.log("Insufficient funds!");
                } else {
                    balance -= withdraw;
                    console.log("Withdrawn successfully. New balance:", balance);
                }
                break;
            case 4:
                console.log("Thank you for using the ATM. Goodbye!");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }

        if (choice === 4) break;
    }

}
