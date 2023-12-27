
const purchasesArray = [
    { item: 'Item 1', amount: 50 },
    { item: 'Item 2', amount: 30 },
    { item: 'Item 3', amount: 20 },
    { item: 'Item 4', amount: 80 }
];

function calculateTotalAmount(purchases) {
    let totalAmount = 0;

    purchases.forEach(purchase => {
        totalAmount += purchase.amount;
    });

    return totalAmount;
}
const totalSpent = calculateTotalAmount(purchasesArray);
console.log('Total amount spent:', totalSpent);
