import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const activeLink = ({isActive}) => isActive ? classes.active : classes.item;

const Navbar = () => {
  return <nav className={classes.navigation}>
    <div className={classes.item}>
      <NavLink to='/profile' className={activeLink}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/messenger' className={activeLink}>Messenger</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/news' className={activeLink}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/music' className={activeLink}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/settings' className={activeLink}>Settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/weather' className={activeLink}>Weather</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/event' className={activeLink}>Event</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/birthday' className={activeLink}>Birthday</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/games' className={activeLink}>Games</NavLink>
    </div>
  </nav>
}

export default Navbar;
