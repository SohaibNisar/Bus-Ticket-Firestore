import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Seats from './components/seatmap';
import Checkout from './components/checkout'
import SignIn from "./components/signin";
import Crousel from './components/Crousel';
import Ticket from "./components/ticket";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.js';

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
        </Switch>

      </div>
    );
  }
}

export default App;
