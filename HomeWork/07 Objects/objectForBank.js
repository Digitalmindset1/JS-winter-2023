// Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as account number, balance, and account type. It can also have functions like deposit, withdraw, and transfer

let bankAccount = {
    accountNumber : '123456',
    balance : 320000,
    accountType : 'checking',

    deposit : function() {
        console.log('This is a confirmation message for your deposit');
    },
    withdraw : function() {
        console.log('This is a confirmation message for your succesful withdraw');
    },
    transfer : function() {
        console.log('This is a confirmation message for your succesful transfer');
    }
}


// Operation
bankAccount.deposit();
bankAccount.withdraw();
bankAccount.transfer();
