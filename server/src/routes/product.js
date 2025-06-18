import { Router } from "express";
import Product from "../models/product.js"; // make sure this path is correct
const productRouter = Router();

productRouter.post('/add', async (req, res) => {
    const existingProduct = await Product.findOne({ name: req.body.name });
    if (existingProduct) {
        return res.send('Product already exists!!');
    } else {
        await Product.create(req.body);
        return res.send('Product added successfully!!');
    }
});

export default productRouter;
