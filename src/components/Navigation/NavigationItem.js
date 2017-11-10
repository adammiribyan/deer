import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const activeClass = props.active ? 'active' : ''

  return(
    <li className="nav-item" onClick={props.onClick}>
      <a className={`nav-link ${activeClass}`} href={props.href}>{props.children}</a>
    </li>
  )
}

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default NavigationItem;
