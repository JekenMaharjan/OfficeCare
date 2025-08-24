import { Router } from "express";
import Product from "../models/product.js"; // make sure this path is correct
import upload from "../middlewares/upload.js"; // your multer config file
const productRouter = Router();

// Add Product with image upload
productRouter.post('/Product', upload.single('image'), async (req, res) => {
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
productRouter.get('/Product', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Get product by ID
productRouter.get('/Product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
});

// Delete product
productRouter.delete('/Product/:id', async (req, res) => {
    try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.send('Product Deleted successfully!!');
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Update product
productRouter.put('/Product/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send('Product Updated Successfully!!');
});

export default productRouter;
