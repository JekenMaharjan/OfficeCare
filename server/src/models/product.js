import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,             // Name of the product
  description: String,      // Short description
  price: Number,            // Price in numbers
  category: String,         // Category like "Electronics", "Clothing", etc.
  imageUrl: String,         // Link to product image
  stock: Number             // Number of items available
});

const Product = mongoose.model('Product', productSchema);
export default Product;
