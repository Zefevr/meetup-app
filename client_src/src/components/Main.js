import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Meetups from './Meetups'
import About from './About'

const Main = () => (

  <Router>
    <div>
      <Route exact path="/" component={Meetups}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default Main