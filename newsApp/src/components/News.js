import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
      static defaultProps ={
            country : "in",
            pageSize : 6,
            category : "general"

      }

      static propTypes = {
            country : PropTypes.string,
            pageSize: PropTypes.number,
            category : PropTypes.string,
      }

      constructor(){
            super();
            this.state = {
                  articles : [],
                  loading : false,
                  page : 1
            }

      }

      async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7b04bc6446b46ddb10c44e908bca6f9&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            this.setState({loading : true})
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                  articles : parseData.articles,
                  totalResults : parseData.totalResults,
                  loading: false
            })
      }
      
      handleNextClick = async () =>{
            console.log("Next");
            if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
                  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7b04bc6446b46ddb10c44e908bca6f9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                  this.setState({loading : true})
                  let data = await fetch(url);
                  let parseData = await data.json();
                  console.log(parseData);
                  this.setState({
                        page : this.state.page + 1,
                        articles : parseData.articles,
                        loading : false
                  })
                  
      }
      }
      
      handlePrevClick = async () => {
            console.log("Previous");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7b04bc6446b46ddb10c44e908bca6f9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true})
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState ({
                  page : this.state.page - 1,
                  articles : parseData.articles,
                  loading: false
            })

      }

  
          
  render() {
    return (
      <div className="container my-3">
          <h1 className='text-center' style={{margin : '35px'}}>NewsBuzz - Top Headlines Today</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
          {
          !this.state.loading && this.state.articles.map((element) => {
            return (<div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>)
          })
          }
              
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="my-3 btn btn-primary btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="my-3 btn btn-primary btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
          

      </div>

    )
  }
}

export default News