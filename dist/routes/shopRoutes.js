import { Router } from "express";
import { getIndex, getProducts, getProductById, getSaludo, postCart, getCart, deleteCartItem } from "../controllers/shopCtrl.js";
export const shopRouter = Router();
//Usamos get y por lo tanto exige coincidencia "completa", no capa otras rutas
shopRouter.get('/', getIndex);
shopRouter.get('/products', getProducts);
shopRouter.get('/products/:productId', getProductById);
shopRouter.get('/cart', getCart);
shopRouter.post('/add-to-cart', postCart);
shopRouter.post('/cart-delete-item', deleteCartItem);
shopRouter.get('/saludo', getSaludo);
