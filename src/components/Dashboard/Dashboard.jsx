
import Product from '../Product/Product'
import React, { Component } from 'react'
import Form from '../Form/Form'
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      product_id: null,
      inventory: [],
      editing: false,
      currentProduct: {} 
    }
  }

  componentDidMount() { // this runs after constructor and render
    this.getInventory()
  }

  getInventory = () => {
    axios
      .get('/api/inventory/')
      .then(res => {
        this.setState({ inventory: res.data })
      })
      .catch(error => console.log(error))
  }

  getProduct = () => {
    axios
      .get('/api/product/:id')
      .catch((err) => console.log(err));
  }

  deleteProduct = (product_id) => {
    axios
      .delete(`/api/product/${product_id}`)
      .then(res => {
        this.setState({ inventory: res.data })
      })
      .catch(err => console.log(err))
  }

  toggleEdit = (product) => {
    const { editing } = this.state
    this.form_ref.cancelInput();
    this.setState({ editing: !editing, currentProduct: product })
  }

  render() {
    const viewInventory = this.state.inventory.map((product) => {
      const { imgurl, productname, price, product_id } = product
      return (
        <div key={product_id}>
          <Product 
            deleteProduct={this.deleteProduct} 
            toggleEdit={this.toggleEdit}
            imgurl={imgurl} 
            productname={productname} 
            price={price} 
            productId={product_id}
            product={product} />
        </div>
      )
    })
    return (
      <div className='column-wrap'>
        <div className='form-wrap'>
          <Form 
            ref={ref => this.form_ref = ref} // Research more about ref in react
            getInventory={this.getInventory} 
            editing={this.state.editing} 
            toggleEdit={this.toggleEdit} 
            currentProduct={this.state.currentProduct} />
        </div>
        <div className='dashboard list-wrap' >
          {viewInventory}
        </div>
      </div>
    )
  }
}