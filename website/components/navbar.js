import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, } from 'mdbreact';
import './navbar.css';
import $ from 'jquery';
import { firebase } from "../../firebaseConfig";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    $(document).ready(() => {
      $(window).scroll(() => {
        let offset = $(window).scrollTop();
        if (offset > 50) {
          $('#home-nav nav').removeClass('scrolled');
        }
        else{
          $('#home-nav nav').addClass('scrolled');
        }
      });
    })
  }

  
  signOut = () => {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage)
    });
}

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div id='home-nav'>
        <header >
          <MDBNavbar color="bg-info" fixed="top" dark expand="md" scrolling className='scrolled' >
            <MDBNavbarBrand href="/">
              <strong>Bus Ticket</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/ticketBooking">Ticket Booking</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contactus">Contact Us</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/signin">Sign in</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={this.signOut}>Sign Out</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;