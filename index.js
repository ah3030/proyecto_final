import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <Navbar />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);