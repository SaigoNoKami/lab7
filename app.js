const express = require('express')
const product_Router = require('./Routers/product_router')
const worker_Router = require('./Routers/worker_router')
const process_Router = require('./Routers/process_router')
require('dotenv').config()
const mongoose = require("mongoose");

mongoose
.connect(process.env.mongoUrl, { useNewUrlParser: true })
.then(() => console.log('MongoDB has been connected'))
.catch(e => console.log(e));

const app = express()
app.use(express.json())

const start = () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log('Server started on PORT ', process.env.PORT)
    )
    app.use('/product', product_Router)
    app.use('/worker', worker_Router)
    app.use('/worker', process_Router)
  } catch (error) {
    console.log(error)
  }
}

start()
