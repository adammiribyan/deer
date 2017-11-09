import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  render() {
    return(
      <nav>
        <ul className="nav nav-pills float-right">
          <NavigationItem href="/" active>Home</NavigationItem>
          <NavigationItem href="#">Try it FREE</NavigationItem>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
