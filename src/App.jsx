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
      inventory: []
    }
  }

  getInventory = () => {
    axios
      .post('/api/inventory/')
      .then(res => {
        this.setState({ inventory: res.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { imgurl, productName, price } = this.state.inventory
    return (
      <div className="App">
        <Header />
        <Dashboard imgurl={imgurl} name={productName} price={price} inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}
