import React from 'react';
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
//import { Link,  BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <a href="/meetups/add" className="btn-floating btn-large waves-effect waves-light red">
        <i className="fa fa-plus"></i>
      </a>
    </div>

  </div>
    
)

export default App
