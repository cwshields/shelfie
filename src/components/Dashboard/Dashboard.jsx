import React from 'react';
import Product from '../Product/Product'

const Dashboard = (props) => {
  let viewInventory = props.inventory.map( (product) => {
    const { imgurl, productname, price, id } = product
    return (
      <Product imgurl={imgurl} name={productname} price={price} key={id}/>
    )
  })
  return (
    <div className='dashboard'>
      {viewInventory}
    </div>
  )
}

export default Dashboard