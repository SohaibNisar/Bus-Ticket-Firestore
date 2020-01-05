import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Provider } from './context';
// import Data from './components/data';
// import Seats from './components/seatmap';
import Test from './components/seats';
import Checkout from './components/checkout'
import SignIn from "./components/signin";
// import Crousel from './components/Crousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SearchForm/> */}

        <Switch>
          {/* <Route exact path='/' component={Data} /> */}
          {/* <Route exact path='/' component={Crousel} /> */}
          <Route exact path='/' component={Test} />
          <Route exact path='/checkout' component={Checkout} />
          {/* <Route exact path='/' component={SignIn} /> */}
          <Route exact path='/signin' component={SignIn} />
          {/* <Route path='/seatmap' component={Seats} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
