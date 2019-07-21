const getInventory = (req, res, next) => {
  const dbInstance = req.app.get('db')

  dbInstance.get_inventory()
    .then( product => res.status(200).send(product) )
    .catch( err => {
      res.status(500).send({errMessage: "There was an error!"})
      console.log(err)
    })
  }
const addProduct = (req, res, next) => {
  const dbInstance = req.app.get('db')
  const { productname, price, imgurl } = req.body

  dbInstance.create_product([ imgurl, productname, price ])
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "There was an error!"})
      console.log(err);
    })
}

module.exports = {
  getInventory,
  addProduct
}