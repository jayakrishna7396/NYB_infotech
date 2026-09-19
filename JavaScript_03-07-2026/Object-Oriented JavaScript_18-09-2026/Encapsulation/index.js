// Encapsulation
// Definition:
// Encapsulation means keeping data and methods together
// inside a class and protecting private data.

// Class
class BankAccount {

    // Private property
    #balance = 0;

    // Method to add money
    deposit(amount) {
        this.#balance = this.#balance + amount;
        console.log("Amount deposited:", amount);
    }

    // Method to check balance
    getBalance() {
        console.log("Balance:", this.#balance);
    }
}


// Create object
const account = new BankAccount();

// Add money
account.deposit(5000);

// Get balance
account.getBalance();