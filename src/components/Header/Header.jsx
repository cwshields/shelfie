import React, { Component } from 'react';
import logo from '../../imgs/shelfie.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <img className='logo' src={logo} alt="Logo"/>
          <div className='company-name'>shelfie</div>
          <div className='btn-wrap'>
            <button className='btn'>Home</button>
            <button className='btn'>Add Item</button>
          </div>
        </nav>
      </div>
    )
  }
}