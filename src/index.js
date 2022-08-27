import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: '1', message: 'Hi. How are you?', like: '6' },
  { id: '2', message: 'It\'s my first message', like: '5' },
]


let messagesData = [
  { text: 'Hi', id: 1, },
  { text: 'How are you?', id: 2, },
  { text: 'I have good news', id: 3, },
  { text: 'Hello!', id: 4, },
  { text: 'Are you here?', id: 5, },
]

let dialogsData = [
  { name: 'Paul', surname: 'Molive', id: 'Paul Molive', },
  { name: 'Anna', surname: 'Steshia', id: 'Anna Steshia', },
  { name: 'Peter', surname: 'Cruiser', id: 'Peter Cruiser', },
  { name: 'Anna', surname: 'Mull', id: 'Anna Mull', },
  { name: 'Paige', surname: 'Turner', id: 'Paige Turner', },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
