import React from 'react';

import classes from './Messanger.module.css';
import DialogLink from './DialogLink';
import MessageText from './MessageText';



const Messanger = (props) => {

  let dialogsElements = props.dialogsData
    .map(dialog => <DialogLink name={dialog.name} surname={dialog.surname} id={dialog.id} />)

  let messagesElements = props.messagesData
    .map(message => <MessageText text={message.text} id={message.id} />)


  return (
    <div className={classes.messangerSection}>
      <div className={classes.chatUsers}>
        {dialogsElements}
      </div>
      <div>
        <div className={classes.user}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}

export default Messanger;
