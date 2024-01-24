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
}
