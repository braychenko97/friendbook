import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile/MyPosts';

import './App.css';
import Messenger from './components/Messenger';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
import Weather from './components/Weather';
import Event from './components/Event';
import Birthday from './components/Birthday';
import Games from './components/Games';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-container'>
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/*' element={<Profile postsData={props.postsData} />} />
              <Route path='/messenger/*' element={<Messenger dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/weather/*' element={<Weather />} />
              <Route path='/event/*' element={<Event />} />
              <Route path='/birthday/*' element={<Birthday />} />
              <Route path='/games/*' element={<Games />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
