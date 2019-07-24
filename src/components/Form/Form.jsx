import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      imgurl: '',
      productname: '',
      price: '',
      editing: false
    }
    this.baseState = this.state
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  cancelInput = () => {
    this.setState(this.baseState)
  }

  addProduct = () => {
    const { imgurl, productname, price } = this.state
    axios
      .post('/api/product/', { imgurl, productname, price })
      .then(res => this.setState({ inventory: res.data }))
      .catch((err) => console.log(err));
    this.props.getInventory()
    this.cancelInput()
  }

  addTestProducts = () => {
    axios
      .post('/api/products/')
      .then(res => this.setState({ inventory: res.data }))
      .catch((err) => console.log(err))
    this.props.getInventory()
  }

  render() {
    const { imgurl, productname, price, } = this.state
    const { handleInputChange } = this
    const { editing, toggleEdit } = this.props
    return (
      <div className='form-container' toggleEdit={toggleEdit}>
        <div className='imgurl-wrap'>
          {imgurl === '' ? <img src="https://via.placeholder.com/350x250" alt="" />
            : <img src={this.state.imgurl} alt="" />}
        </div>
        <div className='input-group'>
          <p>Image URL:</p>
          <input name='imgurl' value={imgurl} onChange={handleInputChange} type="text" />
          <p>Product Name:</p>
          <input name='productname' value={productname} onChange={handleInputChange} type="text" />
          <p>Price:</p>
          <input name='price' value={price} onChange={handleInputChange} type="number" />
        </div>
        <div className='btn-group'>
          <button onClick={this.cancelInput}>Cancel</button>
          {editing === false ? <button onClick={this.addProduct}>Add to Inventory</button>
            : <button /*onClick={}*/>Save Changes</button>}
        </div>
        <div className='test-product-btn flex-center'><button onClick={this.addTestProducts}>TEST PRODUCTS</button></div>
      </div>
    )
  }
}