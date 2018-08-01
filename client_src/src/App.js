import React from 'react';
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import { Link,  BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <Router>
      <div className="fixed-action-btn">
        <Link to="/meetups/add" className="btn-floating btn-large waves-effect waves-light red">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
    </Router>

  </div>
    
)

export default App
