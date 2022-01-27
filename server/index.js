import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// const authRoutes = require("./routes/auth.js");

import invoiceRoutes from './routes/invoices.js'
import getinvoicesRoutes from './routes/invoices.js'


const app = express()
dotenv.config()

app.use((express.json()))
app.use((express.urlencoded()))
app.use((cors()))

app.use('/invoices', invoiceRoutes)
app.use('/invoices', getinvoicesRoutes)




app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    
});

// app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING')
  })

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))