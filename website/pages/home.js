import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Slide from '../components/slider';
import About from '../components/about';
import TopSection from '../components/topsection';
import NewsLetter from '../components/newsletter';
import Ratio from '../components/totalvalues';
import Features from '../components/features';
import Footer from '../components/footer';

class Home extends Component {

  render() {
    return (
      <div style={{marginTop: 54}}>
        <Navbar />
        <Slide />
        <TopSection />
        <About />
        <Ratio />
        <Features />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
export default Home;