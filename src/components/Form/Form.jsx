import React, { Component } from 'react';


export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
    this.baseState = this.state
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  cancelInput = (e) => {
    this.setState(this.baseState)
  }

  render() {
    const { handleInputChange } = this
    return (
      <div>
        <form>
          <div><img src="https://via.placeholder.com/350x250" alt=""/></div>
          <div className='input-group'>
            <p>Image URL:</p>
            <input name='name' onChange={handleInputChange} type="text"/>
            <p>Product Name:</p>
            <input name='price' onChange={handleInputChange} type="text"/>
            <p>Price:</p>
            <input name='imgurl' onChange={handleInputChange} type="text"/>
          </div>
          <div>
            <button onClick={this.cancelInput}>Cancel</button>
            <button>Add to Inventory</button>
          </div>
        </form>
      </div>
    )
  }
}