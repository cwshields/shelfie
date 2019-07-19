import React from 'react';
import Product from '../Product/Product'

const Dashboard = (props) => {
  let viewInventory = props.inventory.map( (product) => {
    return (
      <Product key={product.id}/>
    )
  })
  return (
    <div>
      {viewInventory}
    </div>
  )
}

export default Dashboard