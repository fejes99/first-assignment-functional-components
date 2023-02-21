import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css';

class NavbarItem extends Component {
  render() {
    return (
      <div className='navbar-item'>
        <NavLink to={this.props.link}>{this.props.name}</NavLink>
      </div>
    );
  }
}

export default NavbarItem;
