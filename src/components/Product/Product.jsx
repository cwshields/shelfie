import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { imgurl, productname, price } = this.props
    return (
      <div>
        <div className='product-group'>
          <div className='imgurl'>{imgurl}</div>
          <div>{productname}</div><div>{price}</div>
          <button>Edit</button><button>Delete</button>
        </div>
      </div>
    )
  }
}