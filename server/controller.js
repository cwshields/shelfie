const getInventory = (req, res, next) => {
  const dbInstance = req.app.get('db')

  dbInstance.get_inventory()
    .then( product => res.status(200).send(product) )
    .catch( err => {
      res.status(500).send({errMessage: "There was an error!"})
      console.log(err)
    })
    res.status(200).send(product)
  }

module.exports = {
  getInventory
}