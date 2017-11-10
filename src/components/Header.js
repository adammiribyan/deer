import React from 'react';
import Navigation from './Navigation/';

const Header = (props) => {
  return (
    <header className="header clearfix">
      <Navigation dispatch={props.dispatch} currentUser={props.currentUser} />
      <h3 className="text-muted">Deer</h3>
    </header>
  )
}

export default Header;
