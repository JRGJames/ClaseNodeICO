const products = [];
export class Product {
    constructor(title, imageUrl, description, price, id) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.id = id;
    }
    save() {
        if (!this.id) {
            this.id = Math.round(Math.random() * 1000000);
            products.push(this);
        }
        else {
            const index = products.findIndex(p => p.id === this.id);
            if (this.id !== -1) {
                products[index] = this;
            }
        }
    }
    ;
    static deleteById(productId) {
        const index = products.findIndex(p => p.id === productId);
        products.splice(index, 1);
    }
    static fetchAll() {
        return products;
    }
    ;
    static findById(productId) {
        return products.find(p => p.id === productId);
    }
}
