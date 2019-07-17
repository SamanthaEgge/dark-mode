import React, { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
  console.log(useDarkMode)
  const [darkMode, setDarkMode] = useDarkMode('darkmodekey', false)

  const handleToggle = (event) => {
    event.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={handleToggle}
          className={darkMode === true ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
