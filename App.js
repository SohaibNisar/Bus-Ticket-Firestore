import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Seats from './components/seatmap';
import Checkout from './components/checkout'
import SignIn from "./components/signin";
import Crousel from './components/Crousel';
import Ticket from "./components/ticket";
import Admin from "./components/admin/components/admin";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'mdbreact/dist/css/mdb.css';

import Busmanagement from "./components/admin/pages/busmanagement";
import Routes from "./components/admin/pages/routes";
import Booking from "./components/admin/pages/booking";
import Users from "./components/admin/pages/user";
import AdminLogin from "./components/admin/pages/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Crousel} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' component={SignIn} />
          <Route path='/seatmap' component={Seats} />
          <Route path='/ticket' component={Ticket} />
          <Route path={'/login'} component={AdminLogin} />

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
