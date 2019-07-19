import React, { Component } from 'react';
import logo from '../../imgs/shelfie.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <img className='logo' src={logo} alt="Logo"/>
          <div className='company-name'>SHELFIE</div>
        </nav>
      </div>
    )
  }
}