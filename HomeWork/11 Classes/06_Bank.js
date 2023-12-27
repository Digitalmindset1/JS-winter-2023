// Create a class called BankAccount that has accountNumber, accountHolderName, and balance properties, and a deposit method that takes in an amount and adds it to the balance. Create an instance of the BankAccount class and call the deposit method with an amount.

class BankAccount{
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. Actual balance is $${this.balance}`)
    }
} 

const MyAccount = new BankAccount(1234567890, 'Niiaz Murtazin', 10000);
MyAccount.deposit(777);

