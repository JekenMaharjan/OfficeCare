import { Router } from "express";
import Product from "../models/product.js"; // make sure this path is correct
import upload from "../middlewares/upload.js"; // your multer config file
const productRouter = Router();

// Add Product with image upload
productRouter.post('/addProduct', upload.single('image'), async (req, res) => {
    try {
        const existingProduct = await Product.findOne({ name: req.body.name });
        if (existingProduct) {
            return res.status(400).send('Product already exists!!');
        }

        const { name, description, price, category, stock } = req.body;
        const image = req.file ? req.file.filename : "";

        await Product.create({
            name,
            description,
            price,
            category,
            image, // save filename instead of full URL
            stock
        });

        return res.send('Product added successfully!!');
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).send("Something went wrong");
    }
});

// Get all products
productRouter.get('/addProduct', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// Get product by ID
productRouter.get('/addProduct/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
});

// Delete product
productRouter.delete('/addProduct/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send('Product Deleted Successfully!!');
});

// Update product
productRouter.put('/addProduct/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send('Product Updated Successfully!!');
});

export default productRouter;
