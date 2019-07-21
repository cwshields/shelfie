import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      productname: '',
      price: '',
      imgurl: ''
    }
    this.baseState = this.state
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  cancelInput = () => {
    console.log(this.baseState)
    this.setState( this.baseState )
  }

  addProduct = () => {
    const { imgurl, productname, price } = this.state
    axios
      .post('/api/product/', { imgurl, productname, price })
      .catch((err) => console.log(err))
  }

  render() {
    const { imgurl, productname, price } = this.state
    const { handleInputChange } = this
    return (
      <div>
        <div>
          <div><img src="https://via.placeholder.com/350x250" alt=""/></div>
          <div className='input-group'>
            <p>Image URL:</p>
            <input name='imgurl' value={imgurl} onChange={handleInputChange} type="text"/>
            <p>Product Name:</p>
            <input name='name' value={productname} onChange={handleInputChange} type="text"/>
            <p>Price:</p>
            <input name='price' value={price} onChange={handleInputChange} type="number"/>
          </div>
          <div>
            <button onClick={this.cancelInput}>Cancel</button>
            <button onClick={this.props.getInventory}>Add to Inventory</button>
          </div>
        </div>
      </div>
    )
  }
}