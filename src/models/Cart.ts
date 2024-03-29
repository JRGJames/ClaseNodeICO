import { stat } from "fs";

export class CartItem {
    constructor(
        public id: number,
        public quantity: number,
    ) { }
}

const cartItems: CartItem[] = [];

export class Cart {
    static addProduct(id: number, quantity: number) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            cartItems[index] = new CartItem(id, cartItems[index].quantity + quantity);
        } else {
            cartItems.push(new CartItem(id, quantity));
        }
    }

    static getCart() {
        return cartItems;
    }

    static deleteProduct(id: number) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            cartItems.splice(index, 1);
        }
    }

    static decreaseProduct(id: number) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index >= 0) {
            const quantity = cartItems[index].quantity;
            if (quantity === 1) {
                this.deleteProduct(id);
            } else {
                cartItems[index] = new CartItem(id, quantity - 1);
            }
        }
    }
}
