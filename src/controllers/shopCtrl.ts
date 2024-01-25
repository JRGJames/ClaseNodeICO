import { NextFunction, Request, Response } from "express";

import { Product } from "../models/Product.js";
import { Cart } from "../models/Cart.js";


export const getIndex = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/index', {pageTitle:'Tienda', path:'/'});
};

export const getProducts = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/product-list', {pageTitle:'Lista Productos', path:'/products', prods: Product.fetchAll()});
};

export const getProductById = (req: Request,res: Response,next: NextFunction) => { 
    const productId = +req.params.productId; 
    const product = Product.findById(productId);
    if(product){
        res.render('shop/product-detail', {pageTitle:product.title, path:'', product: product});
    }else{
        res.status(404).render('404.ejs');    
    }
};

export const getCart = (req: Request,res: Response,next: NextFunction) => {
    const cartItems = Cart.getCart();
    const items = cartItems.map(cartItems => {
        const product = Product.findById(cartItems.id); 
        if(product) {
            return {
            id: cartItems.id,
            title: product.title,
            price: product.price,
            quantity: cartItems.quantity
            }
        } else {
            return []
        }
    });
    res.render('shop/cart', {pageTitle:'Carrito', path:'/cart', items: items});
}

export const deleteCartItem = (req: Request,res: Response,next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.deleteProduct(productId);
    res.redirect('/cart');
}

export const postCartDecreaseItem = (req: Request,res: Response,next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.decreaseProduct(productId);
    res.redirect('/cart');
}

export const postCartIncreaseItem = (req: Request,res: Response,next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.addProduct(productId,1);
    res.redirect('/cart');
}

export const postCart = (req: Request,res: Response,next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.addProduct(productId,1);
    res.redirect('/cart');
};

export const getSaludo = (req: Request,res: Response,next: NextFunction)=>{
    res.render('prueba',{nombre: 'Ico'});
}
