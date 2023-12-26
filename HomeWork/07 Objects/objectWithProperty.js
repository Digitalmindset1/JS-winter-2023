// Suppose you are building an e-commerce application and you want to create a new Product object with property name, price, manufacturer, category

let product = {
    name : 'Tablet',
    price : 500,
    manufacturer: 'Apple',
    category: 'Electronics'
};

// Now add a description property to the Product object you created

product.description = 'A high-quality tablet with advanced features'
console.log('Product with description:', product);

// Suppose the price of the Product object you created earlier changes. Now the price increased by $10
product.price += 10;
console.log('Product with increased price:', product);

// Remove the description property from the Product object you created earlier
delete product.description;
console.log('Product without description:', product);