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
      inventory: []
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

  render() {
    const { inventory } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='body-wrap'>
          <Dashboard inventory={inventory} />
          <Form getInventory={this.getInventory} />
        </div>
      </div>
    );
  }
}
