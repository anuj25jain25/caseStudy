import React, { Component } from 'react';
import '../../css/App.css';
import Card from '../components/card';

class HotTkt extends Component {
  render() {
    return (
        <section className="hot-ticket-sec ticket-boxes">
        <div className="container">
          <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
          <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
          <div className="btn-sec text-center p-20 pt-0">
            <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
          </div>
        </div>
      </section>
    );
  }
}

export default HotTkt;
