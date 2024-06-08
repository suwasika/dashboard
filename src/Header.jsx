import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar, toggleTheme, theme }) {
  return (
    <header className={`header ${theme === 'light' ? 'light' : 'dark'}`}>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={() => OpenSidebar(!OpenSidebar)} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='theme-icon icon' onClick={toggleTheme} />
        <FontAwesomeIcon icon={faCog} className='icon' onClick={OpenSidebar} />
      </div>
    </header>
  );
}

export default Header;
