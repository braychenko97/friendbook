import React from 'react';

import classes from './Messenger.module.css';
import { NavLink } from 'react-router-dom';


const DialogLink = (props) => {
  return (
    <div className={classes.user} >
      <NavLink to={'/messenger/' + props.id}>{props.name + ' ' + props.surname}</NavLink>
    </div>
  )
}

export default DialogLink;
