import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Meetups from './components/Meetups'
import About from './components/About'


const App = () => (
  <main>
      <Router>
          <div>
          <Route exact path='/' componet={Meetups} />
          <Route exact path='/about' componet={About} />
          </div>
      </Router>   
   </main>   
)

export default App
