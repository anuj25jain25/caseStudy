import React, { Component } from 'react';
import '../../css/App.css';
import CatCard from '../components/catCard';

class HomeCatSection1 extends Component {
    cardsCollection = [{
        title : 'Concerts',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg'
    },
    {
        title : 'Cricket',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg'
    },
    {
        title : 'Theatre & Arts<',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg'
    },
    {
        title : 'Amusement Parks',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg'
    },
    {
        title : 'Sports',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg'
    },
    {
        title : 'Restaurants',
        src : 'https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg'
    }];
  render() {
    return (
        <section className="home-cat-sec text-center">
        <div className="container">
          <h2 className="site-title">Browse by top categories</h2>
          <div className="row">
          {
            this.cardsCollection.map(card =>
              <CatCard title={card.title} src={card.src} />
            )
          }
          </div>
        </div>
      </section>
    );
  }
}

export default HomeCatSection1;
