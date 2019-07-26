import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { imgurl, productname, price, toggleEdit, deleteProduct, productId, product } = this.props;
    return (
      <div key={productId} className='flex-center'>
        <div className='product-group'>
          <div className='imgurl'><img src={imgurl} /></div>
          <div className='name-price'>
            <div>{productname}</div>
            <div>${price}</div>
          </div>
          <div className='btn-group'>
            <button onClick={() => toggleEdit(product)}>Edit</button>
            <button onClick={() => deleteProduct(productId)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}