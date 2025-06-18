import { Router } from "express"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const saltRounds = 10
import User from "../models/user.js"
const userRouter = Router()

userRouter.post('/register', async (req, res) => {
    // Check if the email already exists
    const user = await User.findOne({email: req.body.email})
    if(user){
        return res.send('User already exists!!')
    } 
    else{
        // Hash the password
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)
        // Create the user in the db
        User.create(req.body)
        return res.send('User Registered Successfully!!')
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
    const token = await jwt.sign({email: email}, '8545cfcb4c25fe3a4feafe221d3115ac0311d9a6f108cf7edf4033b6938a312594ea194d3b837ca737a2d0526a1b45b41a16814fede10cf188b070e09a6d8240')

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