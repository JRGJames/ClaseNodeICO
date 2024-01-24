import { Product } from "../models/Product.js";
export const getProducts = (req, res) => {
    res.render('admin/products', { pageTitle: 'Admin Products', path: '/admin/products', prods: Product.fetchAll() });
};
export const getAddProduct = (req, res, next) => {
    console.log("Devolvemos el formulario para meter productos");
    res.render('admin/edit-product', { pageTitle: "Formulario", path: "/admin/add-product", editing: false });
};
export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
    if (req.body.title) {
        console.log('Ha llegado el siguiente producto: ', req.body.title);
        const producto = new Product(title, imageUrl, description, price);
        producto.save();
    }
    console.log('pasa');
    res.redirect('/products');
};
export const getEditProduct = (req, res, next) => {
    console.log("Devolvemos el formulario para editar productos");
    const editMode = req.query.edit === 'true';
    if (!editMode) {
        return res.redirect('/products');
    }
    const productId = +req.params.productId;
    const product = Product.findById(productId);
    if (product) {
        res.render('admin/edit-product', {
            pageTitle: "Formulario",
            path: "/admin/add-product",
            editing: editMode,
            product: product
        });
    }
    else {
        res.redirect('/products');
    }
};
export const postEditProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price;
    const productId = +req.body.productId;
    const producto = new Product(title, imageUrl, description, price, productId);
    producto.save();
    res.redirect('/admin/products');
};
export const deleteProduct = (req, res, next) => {
    const productId = +req.params.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
};
