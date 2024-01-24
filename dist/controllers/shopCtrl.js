import { Product } from "../models/Product.js";
import { Cart } from "../models/Cart.js";
export const getIndex = (req, res, next) => {
    res.render('shop/index', { pageTitle: 'Tienda', path: '/' });
};
export const getProducts = (req, res, next) => {
    res.render('shop/product-list', { pageTitle: 'Lista Productos', path: '/products', prods: Product.fetchAll() });
};
export const getProductById = (req, res, next) => {
    const productId = +req.params.productId;
    const product = Product.findById(productId);
    if (product) {
        res.render('shop/product-detail', { pageTitle: product.title, path: '', product: product });
    }
    else {
        res.status(404).render('404.ejs');
    }
};
export const postCart = (req, res, next) => {
    const productId = +req.body.productId;
    Cart.addProduct(productId, 1);
    res.render('shop/cart', { nombre: 'JR' });
};
export const getSaludo = (req, res, next) => {
    res.render('prueba', { nombre: 'Ico' });
};
