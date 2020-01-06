import React, { Component } from 'react';
import SideNav from "./sidenav";
import TopNav from "./topnav";

class Admin extends Component {
    render() {
        return (
            <div id='admin'>
                <TopNav />
                <SideNav />
            </div>
        )
    }
}

export default Admin;
