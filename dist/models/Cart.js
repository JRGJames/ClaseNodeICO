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
}
