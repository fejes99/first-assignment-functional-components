import React, { Component } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.css';

const navigationItems = [
  {
    name: 'Users',
    link: '/users',
  },
  {
    name: 'Calculator',
    link: '/calculator',
  },
];

class Navbar extends Component {
  render() {
    let navbarItems = navigationItems.map((assignment) => {
      return (
        <NavbarItem
          key={assignment.name}
          name={assignment.name}
          link={assignment.link}
        />
      );
    });

    return (
      <div className='navbar'>
        <div className='navbar-nav'>{navbarItems}</div>
      </div>
    );
  }
}

export default Navbar;
