import React from 'react';
import Navigation from './Navigation/';

const Header = () => {
  return (
    <header className="header clearfix">
      <Navigation />
      <h3 className="text-muted">Deer</h3>
    </header>
  )
}

export default Header;
