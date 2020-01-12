import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './nav search.css';
import { firebase } from "../../firebaseConfig";

export default class nav extends Component {

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
            <div id='search-form-nav' >
                <nav className="navbar fixed-top navbar-expand-sm navbar-light white scrolling-navbar py-0">
                    <Link className="navbar-brand" to="#"><strong>Navbar</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home"></i>
                                    Home
                                    </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    <i className="fas fa-user-tie"></i>
                                    Admin
                                    </Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                                    My Account
                                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="signin">Sign Up</Link>
                                    <Link className="dropdown-item" to="#" onClick={this.signOut}>Sign Out</Link>
                                    {/* <Link className="dropdown-item" to="admin">Admin</Link> */}
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-phone-volume"></i>
                                    Customer Support
                                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="#">01234567891</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
