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

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(response => {
      console.log(response);
      const newsData = response.data.articles;
      this.setState({newsData: newsData, isHidden: Array(newsData.length).fill(true)});
    })
    .catch(err => alert("There was an error fetching the weather data - " + err));
  }

  toggleNewsCard(index) {
    this.setState({ isHidden: this.state.isHidden.map((isHidden, i) => {
      if (i === index) return !isHidden;
      else return isHidden;
    })});
  }

  toggleAllCards(hide) {
    this.setState({isHidden: Array(this.state.isHidden.length).fill(hide)});
  }
  

  render() {
    return (
      <div className="news">
        {/* <div className="news-header">
          <div className="news-title">News</div>
        </div> */}
        <div className="news-articles">
          {this.state.newsData.map((article, i) => {
            return (<NewsCard {...article} 
              isHidden={this.state.isHidden[i]} 
              toggle={this.toggleWeatherCard}
              index={i}
              key={i} />);
          })}
        </div>
      </div>
    );
  }
}

export default NewsColumn;