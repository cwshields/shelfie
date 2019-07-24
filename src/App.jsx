import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className=''>
          <Dashboard />
        </div>
      </div>
    );
  }
}
