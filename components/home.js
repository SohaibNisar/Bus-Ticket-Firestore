import React, { Component } from 'react';
import Navbar from './navbar';
import Slide from './slider';
import About from './section';
import Ratio from './rationarea';
import Book from './book';
import Services from './services';

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Slide />
                <About />
                <Ratio />
                <Book />
                <Services />
            </div>
        );
    }
}
export default Home;