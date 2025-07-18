import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  location: String,
  password: String,
  confirmPassword: String
});

const User = mongoose.model('User',userSchema);
export default User;