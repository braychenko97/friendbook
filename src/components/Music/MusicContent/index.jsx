import React from 'react';
import FavoritePlaylist from './FavoritePlaylist';

import classes from './MusicContent.module.css';
import NowPlaying from './NowPlaying';
import PopularSongs from './PopularSongs';

const MusicContent = (props) => {
  return (
    <div className={classes.content}>
      <FavoritePlaylist />
      <NowPlaying />
      <PopularSongs />
    </div>
  )
}

export default MusicContent;
