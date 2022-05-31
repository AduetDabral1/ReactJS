import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
      constructor(){
            super();
            this.state = {
                  articles : [],
                  loading : false
            }
      }

      async componentDidMount(){
            let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a7b04bc6446b46ddb10c44e908bca6f9";
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                  articles : parseData.articles
            })
      }

  
          
  render() {
    return (
      <div className="container my-3">
          <h1>NewsBuzz - Top Headlines Today</h1>
          <div className="row">
          {
          this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>)
          })
          }
              
          </div>
          

      </div>

    )
  }
}

export default News