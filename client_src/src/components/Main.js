import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Meetups from './Meetups'
import About from './About'

const Main = () => (
    <main>
        <Router>
            <div>
            <Route exact path='/' componet={Meetups} />
            <Route exact path='/about' componet={About} />
            </div>
        </Router>   
     </main>   
)

export default Main