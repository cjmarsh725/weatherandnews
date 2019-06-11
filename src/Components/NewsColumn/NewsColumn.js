import React, {Component} from 'react';
import './NewsColumn.css';
import NewsCard from '../NewsCard/NewsCard.js';
import axios from 'axios';

class NewsColumn extends Component {
  state = {
    newsData: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    .then(response => {
      const newsData = response.data.articles;
      this.setState({newsData: newsData, isMinimized: Array(newsData.length).fill(true)});
    })
    .catch(err => alert("There was an error fetching the news data - " + err));
  }
  

  render() {
    return (
      <div className="news">
        <div className="news-header">
          <div className="news-title">News</div>
        </div>
        <div className="news-articles">
          {this.state.newsData.map((article, i) => {
            return (<NewsCard {...article} key={i} />);
          })}
        </div>
      </div>
    );
  }
}

export default NewsColumn;