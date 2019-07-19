import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { imgurl, productName, price } = this.props
    return (
      <div>
        <div>
          <div>{imgurl}</div>
          <div>{productName}</div><div>{price}</div>
        </div>
      </div>
    )
  }
}