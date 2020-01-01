import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Data from './components/data';
// import Seats from './components/seatmap';
import Test from './components/seats';
// import Crousel from './components/Crousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SearchForm/> */}

        <Switch>
          {/* <Route exact path='/' component={Data} /> */}
          {/* <Route exact path='/' component={Crousel} /> */}
          <Route exact path='/' component={Test} />
          {/* <Route exact path='/result' component={Book} /> */}
          {/* <Route exact path='/seatmap' component={Seats} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
