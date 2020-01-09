import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './topnav.css';
import { firebase } from "../../../firebaseConfig";
import { Redirect } from "react-router-dom";
class Topnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.setState({
                    redirect:true
                })
            }
        });
    }


    signoutadmin = () => {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
        return (
            <nav className="navbar navbar-dark fixed-top blue-gradient" id='topNav'>
                <button type="button" id="sidebarCollapse" className="btn btn-primary p-0">
                    <i className="fa fa-bars" />
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <Link className="navbar-brand ml-2" to="/">Project Name</Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i> Profile </Link>
                        <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                            <Link className="dropdown-item" to="#">My account</Link>
                            <Link className="dropdown-item" to="#" onClick={this.signoutadmin}>Log out</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Topnav;
