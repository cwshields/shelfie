const express = require('express')
const massive = require('massive')
const controller = require('./controller')
require('dotenv').config()


const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
.then(dbInstance => {
  app.set('db', dbInstance)
}).catch(e => console.log(e))

app.get('/api/inventory/', controller.getInventory)
app.post('/api/product/', controller.addProduct)
app.delete('/api/product/:product_id', controller.deleteProduct)
app.put('/api/product/:id', controller.editProduct)

app.listen(SERVER_PORT, () => console.log('Listening on Port ' + SERVER_PORT))