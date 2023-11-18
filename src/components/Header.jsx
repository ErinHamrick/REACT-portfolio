// Header.js
import React from 'react';
import NavLinks from './NavLinks';

function Header() {
  return (
    <header>
      <div className="brand">Erin Hamrick</div>
      <hr />
      <NavLinks />
    </header>
  );
}

export default Header;
