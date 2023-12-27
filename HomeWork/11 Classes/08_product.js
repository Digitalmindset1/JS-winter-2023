// 

class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    discount(percentage) {
        const discountedPrice = this.price - (this.price * percentage / 100);
        return discountedPrice;
    }
}


const myProduct = new Product('iPhone 15', 990, 'A great smartphone');

const discountedPrice = myProduct.discount(30);
console.log('Discounted price:', discountedPrice);
