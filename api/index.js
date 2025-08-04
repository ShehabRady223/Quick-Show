import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

// Initialize Express App
const app = express()
const port = 3000

// Connect to Database
await connectDB()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Node.js')
})
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port, () => {
    console.log(`Server Working Perfect on Port ${port}`);
})