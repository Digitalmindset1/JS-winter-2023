// Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.


const productsArray = [
    { name: 'Product 1', stock: 5 },
    { name: 'Product 2', stock: 0 },
    { name: 'Product 3', stock: 10 },
    { name: 'Product 4', stock: 3 }
];

function filterInStock(products) {
    return products.filter(product => product.stock > 0);
}


const inStockProducts = filterInStock(productsArray);
console.log('Products in stock:', inStockProducts);

