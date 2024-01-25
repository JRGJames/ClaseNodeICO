export class CartItem {
    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }
}
const cartItems = [];
export class Cart {
    static addProduct(id, quantity) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            cartItems[index] = new CartItem(id, cartItems[index].quantity + quantity);
        }
        else {
            cartItems.push(new CartItem(id, quantity));
        }
    }
    static getCart() {
        return cartItems;
    }
    static deleteProduct(id) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            cartItems.splice(index, 1);
        }
    }
    static decreaseProduct(id) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            const quantity = cartItems[index].quantity;
            if (quantity === 1) {
                this.deleteProduct(id);
            }
            else {
                cartItems[index] = new CartItem(id, quantity - 1);
            }
        }
    }
}
