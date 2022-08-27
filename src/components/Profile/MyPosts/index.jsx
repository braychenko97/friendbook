import React from 'react';

import classes from './MyPosts.module.css';
import Post from './Post';



const MyPosts = (props) => {

  let postItem = props.state.postsData
    .map(post => <Post message={post.message} like={post.like} />)

  return (
<div>
  <div>
        <textarea></textarea>
        <button>Add posts</button>
      </div>
      <div className={classes.posts}>
        {postItem}
      </div>
    </div>
  )
}

export default MyPosts;
