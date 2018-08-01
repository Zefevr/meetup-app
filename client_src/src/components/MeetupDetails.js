import React, { Component } from 'react'
import { Link,  BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'

class MeetupDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getMeetup()
  }

  getMeetup(){
    let meetupId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response =>{
        this.setState({details: response.data},() =>{
          console.log(this.state)
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <Router>
        <div>
          <Link className="btn grey" to="/">Back</Link>
          <h1>{this.state.details.name}</h1>
        </div>
      </Router>
    )
  }
    
}

export default MeetupDetails