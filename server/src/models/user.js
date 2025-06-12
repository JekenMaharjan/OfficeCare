import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  location: String,
  password: String,
  confirmPassword: String
});