const express = require('express')
const massive = require('massive')
const {
  getInventory,
  getProduct,
  addProduct,
  addTestProducts,
  deleteProduct,
  editProduct
} = require('./controller')
require('dotenv').config()


const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance)
  }).catch(e => console.log(e))

app.get('/api/inventory/', getInventory)
app.get('/api/product/:id', getProduct)
app.post('/api/product/', addProduct)
app.post('/api/products/', addTestProducts)
app.delete('/api/product/:product_id', deleteProduct)
app.put('/api/product/:id', editProduct)

app.listen(SERVER_PORT, () => console.log('Listening on Port ' + SERVER_PORT))