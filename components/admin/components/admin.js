import React, { Component } from 'react';
import SideNav from "./sidenav";
import TopNav from "./topnav";
import { firebase } from '../../../firebaseConfig';
import { Redirect } from "react-router-dom";

class Admin extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.setState({ redirect: true })
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/login' />;
        }
        return (
            <div id='admin'>
                <TopNav />
                <SideNav />
            </div>
        )
    }
}

export default Admin;
