import React, { Component } from 'react';
import SearchForm from './components/form';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
      </div>
    );
  }
}

export default App;
