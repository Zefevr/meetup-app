import React, { Component } from 'react'
//import { Link,  BrowserRouter as Router } from 'react-router-dom'

class MeetupItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: props.item
    }
  }

  render(){
    return (

      <li className="collection-item">
        <a href={`/meetups/${this.state.item.id}`}>{this.state.item.name}</a>
      </li>

    )
  }
    
}

export default MeetupItem