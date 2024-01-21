import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:6,
    category:'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props){
    super(props);
    console.log("News constructor called");
    this.state = {
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title = `NewsBuzz - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false,})
    this.props.setProgress(100);
  }
  

  async componentDidMount(){
    this.updateNews();
  }

  handlePrevClick = async ()=>{
    this.setState({page:this.state.page-1})
    this.updateNews();
  }
  handleNextClick = async ()=>{
    this.setState({page:this.state.page+1})
    this.updateNews();
  }

  fetchData = async () => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:this.state.articles.concat(parsedData.articles), totalResults:parsedData.totalResults, loading:false,})
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h2 className='text-center'>NewsBuzz - Top Headlines on {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.articles.totalResults}
          loader={this.state.loading && <Spinner/>}>
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author}/>
              </div>
              })}          
            </div>
          </div>
        </InfiniteScroll>
      </div>
      </>
    )
  }
}

export default News
