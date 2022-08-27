import React from 'react';

import classes from './Messanger.module.css';
import { NavLink } from 'react-router-dom';


const DialogLink = (props) => {
  return (
    <div className={classes.user} >
      <NavLink to={'/messanger/' + props.id}>{props.name + ' ' + props.surname}</NavLink>
    </div>
  )
}

export default DialogLink;
