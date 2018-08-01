import React, {Component} from 'react'
//import { Link,  BrowserRouter as Router } from 'react-router-dom'

class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Meetupz</a>
            <a data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
            <ul className="right hide-on-small-only">
              <li>
                <a href ="/">
                  <i className="fa fa-users"></i>
                    Meetups
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="main-menu">
          <li>
            <a href="/">
              <i className="fa fa-users"></i>
                    Meetups
            </a>
          </li>
          <li>
            <a href="/meetups/add">
              <i className="fa fa-plus"></i>
                    Add Meetup
            </a>
          </li>
          <li>
            <a href="/about">
              <i className="fa fa-question"></i>
                    About
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar