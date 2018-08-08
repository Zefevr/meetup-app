import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Meetups from './Meetups'
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup'
import EditMeetup from './EditMeetup';

const Main = () => (

  <Router>
    <div>
      <Route exact path="/" component={Meetups}/>
      <Route exact path="/meetup/add" component={AddMeetup}/>
      <Route exact path="/meetups/edit/:id" component={EditMeetup}/>
      <Route exact path="/meetups/:id" component={MeetupDetails}/>
    </div>
  </Router>
)

export default Main