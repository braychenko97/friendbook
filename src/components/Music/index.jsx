import React from 'react';

import classes from './Music.module.css';
import MusicContent from './MusicContent';
import MusicProfile from './MusicProfile';

const Music = (props) => {
  return (
    <div className={classes.musicContainer}>
      <MusicProfile />
      <MusicContent />
    </div>
  )
}

export default Music;
