import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import './navbar.css';
import { firebase } from "../../firebaseConfig";

class Navbar extends Component {
  signOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage)
    });
  }


  render() {
    return (
      <div id='home-nav'>
        <header >
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-color">
            <a className="navbar-brand" href="#"> <strong>Bus<br /> Ticket </strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact activeClassName='active' className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to="/ticketBooking">Ticket Booking</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName='active' className="nav-link" to="/contactus">Contact Us</NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link" id="login-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                  <div className="dropdown-menu dropdown-primary" aria-labelledby="login-dropdown">
                    <Link className="dropdown-item" to="/signin">User Login</Link>
                    <Link className="dropdown-item" to="/login">Admin Login</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-info font-weight-bold" to="/signin" onClick={this.signOut}>Sign Up</Link>
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