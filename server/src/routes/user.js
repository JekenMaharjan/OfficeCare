import { Router } from "express"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const saltRounds = 10
import User from "../models/user.js"
const userRouter = Router()

userRouter.post('/register', async (req, res) => {
    try {
    const { email, role } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User already exists!');
    }
    
    // Ensure only one admin can be created
    if (role === 'admin') {
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            return res.status(400).send('Admin already exists! Only one admin allowed.');
        }
    }
    
        // Hash the password
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)
        req.body.confirmPassword = await bcrypt.hash(req.body.confirmPassword, saltRounds)
        // Create the user in the db
        await User.create(req.body)
        return res.send('User Registered Successfully!!')

    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).send('Registration failed. Please try again later.');
  }
})

userRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body
    // Email should exist
    const user = await User.findOne({email: email})    // findOne returns immediately after it finds one, so used findOne instead of find
    // No: Return email not found
    if(!user){
        return res.send({message: 'E-mail is not found!!'})
    }
    // Yes: Check if password matches to that of db
    const isMatched = await bcrypt.compare(password, user.password)
    if(!isMatched){
        return res.send({message: 'Invalid password'})
    }

    // Used this to generate key: In terminal -> node -> require('crypto').randomBytes(64).toString('hex')
    const token = await jwt.sign({email: email}, process.env.JWT_SECRET);

    return res.send({
        message: 'Logged in Successfully!!',
        user: user,
        isLoggedIn: true,
        token
    })
})

userRouter.get('/register', async (req, res) => {
    const data = await User.find()
    return res.send(data)
})

export default userRouter 