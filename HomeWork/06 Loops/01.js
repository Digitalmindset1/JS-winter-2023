/*You have been hired by a company that sells products online. They want you to create a javascript program that will help them manage their inventory. The program should be able to loop through an array of products and perform certain tasks based on the product information.
Instructions:
Create an array of products with at least 5 products. Each product should have the following properties:
Name
Price
Quantity

2. Loop through the array using a for loop and print out the name and price of each product.
    Example output:
3. Use a while loop to find the product with the lowest price. Print out the name and price of the product.
    Example output:
4. Use a for of loop to calculate the total value of all products in the array.
    Example Output:
5. Use a for in loop to print out all the properties of each product in the array.
Example Output:
Name: Product A
Price: $10
Quantity: 4
Name: Product B
Price: $20
Quantity: 3
Name: Product C
Price: $15
Quantity: 7
Name: Product D
Price: $25
Quantity: 2
Name: Product E
Price: $30
Quantity: 4

*/

// Create an array of products
const products = [
    { name: 'Product A',
        price: 10,
        quantity: 4
    },
    {
        name: 'Product B',
        price: 20,
        quantity: 3
    },
    {
        name: 'Product C',
        price: 15,
        quantity: 7
    },
    {
        name: 'Product D',
        price: 25,
        quantity: 2
    },
    {
        name: 'Product E',
        price: 30,
        quantity: 4
    }
];

// Loop through the array using a for loop and print out the name and price of each product
console.log('Name and Price of each product:');
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name}: $${products[i].price}`);
}

// Use a while loop to find the product with the lowest price
let lowestPriceProduct = products[0];
let index = 1;
while (index < products.length) {
    if (products[index].price < lowestPriceProduct.price) {
        lowestPriceProduct = products[index];
    }
    index++;
}
console.log('\nProduct with the lowest price:');
console.log(`${lowestPriceProduct.name}: $${lowestPriceProduct.price}`);

// Use a for of loop to calculate the total value of all products in the array
let totalValue = 0;
for (const product of products) {
    totalValue += product.price * product.quantity;
}
console.log('\nTotal value of all products:', totalValue);

// Use a for in loop to print out all the properties of each product in the array
console.log('\nProperties of each product:');
for (const product of products) {
    for (const property in product) {
        console.log(`${property}: ${product[property]}`);
    }
    console.log('');
}

