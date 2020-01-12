import React, { Component } from 'react';
import SideNav from "./sidenav";
import TopNav from "./topnav";
import { firebase } from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
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
            } else {
                db.collection('Users').doc(user.uid).get().then((doc) => {
                    let role = doc.data().role;
                    if (role === 'user') {
                        firebase.auth().signOut().then(() => {
                            this.setState({ redirect: true })
                        }).catch(function (error) {
                            var errorMessage = error.message;
                            alert(errorMessage)
                        });
                    }
                })
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
