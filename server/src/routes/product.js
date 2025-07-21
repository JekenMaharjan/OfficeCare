import { Router } from "express";
import Product from "../models/product.js"; // make sure this path is correct
const productRouter = Router();

productRouter.post('/addProduct', async (req, res) => {
    const existingProduct = await Product.findOne({ name: req.body.name });
    if (existingProduct) {
        return res.send('Product already exists!!');
    } else {
        await Product.create(req.body);
        return res.send('Product added successfully!!');
    }
});

productRouter.get('/addProduct', async (req, res) => {
    const products = await Product.find()
    res.send(products)
})

productRouter.get('/addProduct/:id', async (req, res) => {
    const products = await Product.findById(req.params.id)
    res.send(products)
})

productRouter.delete('/addProduct/:id', async (req, res) => {
    await Product.findByIdandDelete(req.params.id)
    res.send('Product Deleted Successfully!!')
})

productRouter.put('/addProduct/:id', async (req, res) => {
    await Product.findByIdandUpdate(req.params.id, req.body)
    res.send('Product Updated Successfully!!')
})

export default productRouter;
