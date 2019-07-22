const getInventory = (req, res, next) => {
  const dbInstance = req.app.get('db')

  dbInstance
    .get_inventory()
    .then( product => res.status(200).send(product) )
    .catch( err => {
      res.status(500).send({errMessage: "There was an error!"})
      console.log(err)
    })
}

const getProduct = () => {
  const dbInstance = req.app.get('db')
  const { id } = req.params
  
  dbInstance.read_product(id)
  .then( product => res.status(200).send(product) )
  .catch( err => {
    res.status(500).send({errMessage: "There was an error!"})
    console.log(err)
  })
}

const addProduct = (req, res, next) => {
  const dbInstance = req.app.get('db')
  const { imgurl, productname, price  } = req.body

  dbInstance
    .create_product([ imgurl, productname, price ])
    .then( inventory => res.sendStatus(200).send(inventory) )
    .catch( err => {
      res.status(500).send({errorMessage: "There was an error!"})
      console.log(err);
    })
}

const deleteProduct = (req, res, next) => {
  const dbInstance = req.app.get('db')

  dbInstance
    .delete_product()
    .then( () => res.status(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "There was an error!"})
      console.log(err);
    })
}

const editProduct = (req, res, next) => {
  const dbInstance = req.app.get('db')
  const { params, query } = req.body

  dbInstance
    .update_product([params.id, query.productname])
    .then( () => res.status(200) )
    .catch( err => {
      res.status(500).send({errorMessage: "There was an error!"})
      console.log(err);
    })
}

module.exports = {
  getInventory,
  getProduct,
  addProduct,
  deleteProduct,
  // editProduct,
}