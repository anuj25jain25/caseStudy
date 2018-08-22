import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.css';
import '../css/site.css';
import NavBar from './components/navBar';
import Carousel from './components/carousel';
import HotTkt from './sections/hotTktSec';
import HomeCatSection1 from './sections/homeCat1';
import HomeCatSection2 from './sections/homeCat2';
import HomeFeature from './sections/homeFeature';
import SiteFooter from './sections/siteFooter';
import './utils/utility.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <HotTkt />
        <HomeCatSection1 />
        <HomeCatSection2 />
        <HomeFeature />
        <SiteFooter />
      </div>
    );
  }
}

export default App;
