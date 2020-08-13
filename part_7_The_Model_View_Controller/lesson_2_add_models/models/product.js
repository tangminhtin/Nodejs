// store products into array
const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    // save object into array
    save() {
        products.push(this);
    }

    // get all data
    static fetchAll() {
        return products;
    }
}
