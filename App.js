import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./website/pages/home";
import Seats from './website/pages/seatmap';
import Checkout from './website/pages/checkout'
import SignIn from "./website/pages/signin";
import Crousel from './website/pages/Crousel';
import Ticket from "./website/pages/ticket";

import Admin from "./admin/components/admin";
import Busmanagement from "./admin/pages/busmanagement";
import Routes from "./admin/pages/routes";
import Booking from "./admin/pages/booking";
import Users from "./admin/pages/user";
import AdminLogin from "./admin/pages/login";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Crousel} />
          <Route path='/contactus' component={Crousel} />
          <Route path='/ticketBooking' component={Crousel} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/signin' component={SignIn} />
          <Route path='/seatmap' component={Seats} />
          <Route path='/ticket' component={Ticket} />
          <Route path='/login' component={AdminLogin} />

          <Route
            path="/admin"
            render={({ match: { url } }) => (
              <div style={{ padding: '56px 0 0 55px' }}>
                <Route path={`${url}/`} component={Admin} />
                <Route path={`${url}/busmanagement`} component={Busmanagement} />
                <Route path={`${url}/bookings`} component={Booking} />
                <Route path={`${url}/routes`} component={Routes} />
                <Route path={`${url}/users`} component={Users} />
              </div>
            )}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
