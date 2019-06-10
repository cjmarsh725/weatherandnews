import React, {Component} from 'react';
import './NewsColumn.css';
import NewsCard from '../NewsCard/NewsCard.js';
import axios from 'axios';

class NewsColumn extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: [],
      newsData: []
    }

    this.getNewsData = this.getNewsData.bind(this);
    this.toggleNewsCard = this.toggleNewsCard.bind(this);
    this.toggleAllCards = this.toggleAllCards.bind(this);
  }

  getNewsData() {

  }

  toggleNewsCard() {

  }

  toggleAllCards() {

  }

  render() {
    return (
      <div className="news">
        <div className="news-header">
          <div className="news-title">World News</div>
        </div>
      </div>
    );
  }
}

export default NewsColumn;