class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        console.log("Balance:", this.#balance);
    }
}

const account = new BankAccount();

account.deposit(1000);
account.getBalance();