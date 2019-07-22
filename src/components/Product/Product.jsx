import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { imgurl, productname, price, toggleEdit, deleteProduct } = this.props
    return (
      <div>
        <div className='product-group'>
          <div className='imgurl'>{imgurl}</div>
          <div>{productname}</div>
          <div>{price}</div>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={deleteProduct}>Delete</button>
        </div>
      </div>
    )
  }
}