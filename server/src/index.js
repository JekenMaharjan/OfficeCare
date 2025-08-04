import express from 'express'
import connect from './db/connect.js'
import userRouter from './routes/user.js'
import { createServer } from "http";
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './routes/product.js'
import { Server } from "socket.io"; 
dotenv.config()

const port = process.env.PORT
const app = express()
const httpServer = createServer(app);

const io = new Server(httpServer, { cors: {origin: "*"} });

io.on("connection", (socket) => {
  // ...
});


connect()
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
