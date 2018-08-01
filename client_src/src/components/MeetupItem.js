import React, { Component } from 'react'
import { Link,  BrowserRouter as Router } from 'react-router-dom'

class MeetupItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: props.item
    }
  }

  render(){
    return (
      <Router>
        
        <li className="collection-item">
          <Link to={`/meetups/${this.state.item.id}`}>{this.state.item.name}</Link>
        </li>
        
      </Router>
    )
  }
    
}

export default MeetupItem