import React from 'react';

import classes from './Header.module.css';
import CompanyName from '../Logo';

const Header = () => {
  return <header className={classes.header}>
    <CompanyName />
  </header>
}

export default Header;
