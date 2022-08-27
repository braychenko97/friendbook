import React from 'react';

import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import classes from './Profile.module.css';


const Profile = (props) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  )
}

export default Profile;
