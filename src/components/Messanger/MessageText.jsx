import React from 'react';

import classes from './Messanger.module.css';



const MessageText = (props) => {
  return (
    <div className={classes.userMessage}>{props.text}</div>
  )
}

export default MessageText;
