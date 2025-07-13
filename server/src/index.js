import express from 'express'
import connect from './db/connect.js'
import userRouter from './routes/user.js'
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './routes/product.js'
dotenv.config()

const port = process.env.PORT
const app = express()

connect()
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
