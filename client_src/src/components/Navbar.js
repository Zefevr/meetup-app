import React, {Component} from 'react'
import { Link,  BrowserRouter as Router } from 'react-router-dom'

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
                <Router>
                  <Link to ="/">
                    <i className="fa fa-users"></i>
                    Meetups
                  </Link>
                </Router>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="main-menu">
          <li>
            <Router>
              <Link to ="/">
                <i className="fa fa-users"></i>
                    Meetups
              </Link>
            </Router>
          </li>
          <li>
            <Router>
              <Link to ="/meetups/add">
                <i className="fa fa-plus"></i>
                    Add Meetup
              </Link>
            </Router>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar