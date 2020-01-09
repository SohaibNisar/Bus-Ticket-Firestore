import React from 'react';
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-info">
            <Link class="navbar-brand" to="#"><strong>Navbar</strong></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="ticketBooking">Book Ticket</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">Gallery</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;