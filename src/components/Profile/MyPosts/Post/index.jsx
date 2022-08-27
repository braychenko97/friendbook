import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='/images/avatars/zendaya.jpeg' alt='girl' className={classes.icon} />
      {props.message}
      <div>
        {props.like}
        <span> like</span>

      </div>
    </div>
  )
}

export default Post;
