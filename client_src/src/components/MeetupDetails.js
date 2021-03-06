import React, { Component } from 'react'
//import { Link,  BrowserRouter as Router } from 'react-router-dom'
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

  onDelete(){
    let meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(respones => {
        this.props.history.push('/')
      }).catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <br />
        <a className="btn grey" href="/">Back</a>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {this.state.details.city}</li>
          <li className="collection-item">Address: {this.state.details.address}</li>
        </ul>
        <a className="btn" href={`/meetups/edit/${this.state.details.id}`}>Edit</a>
        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      
      </div>
      
    )
  }
    
}

export default MeetupDetails