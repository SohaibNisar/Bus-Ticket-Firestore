import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import SearchForm from './components/form';
// import Search from './components/test';
import Book from './components/test2';
import Seats from './components/seatmap';
import Test from './components/Crousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SearchForm/> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Test} />
            <Route exact path='/result' component={Book} />
            <Route exact path='/seatmap' component={Seats} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
