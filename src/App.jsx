import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      inventory: [],
      editing: false
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
  
  toggleEdit = () => {
    const { editing } = this.state
    editing === false ? this.setState({ editing: true }) : this.setState({ editing: false })
    this.getInventory()
  }
  
  deleteProduct = (product_id) => {
    axios
      .delete(`/api/product/${product_id}`)
      .catch(err => console.log(err))
  }

  render() {
    const { editing, inventory } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='body-wrap'>
          <Dashboard deleteProduct={this.deleteProduct} toggleEdit={this.toggleEdit} inventory={inventory} />
          <Form editing={editing} getInventory={this.getInventory} />
        </div>
      </div>
    );
  }
}
