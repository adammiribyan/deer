import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

import { logout } from '../../actions/sessionActions';

class Navigation extends Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const isLoggedIn = !!this.props.currentUser;

    return(
      <nav>
          {isLoggedIn ? (
            <ul className="nav nav-pills float-right">
              <NavigationItem href='#'>{this.props.currentUser.email}</NavigationItem>
              <NavigationItem href="#/logout" onClick={this.handleLogout}>Logout</NavigationItem>
            </ul>
          ) : (
            <ul className="nav nav-pills float-right">
              <NavigationItem href="/" active>Home</NavigationItem>
              <NavigationItem href="#">Try it FREE</NavigationItem>
            </ul>
          )}
      </nav>
    )
  }
}

export default Navigation;
