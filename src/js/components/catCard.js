import React, { Component } from 'react';
import '../../css/App.css';

class CatCard extends Component {
  render() {
    return (
        <div className="col-sm-4 cat-box">
        <a href="#" className="block-link">
          <div className="cat-txt">
            <h3>{this.props.title}</h3>
          </div>
          <img src={this.props.src} alt className="img-full-width" />
        </a>
      </div>
    );
  }
}

export default CatCard;
