import React, { Component } from "react";
import BlogItem from "./BlogItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class Blog extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: 'general'
  }

  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      const data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Wanna read interesting blogs? </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <BlogItem
                  title={article.title ? article.title.slice(0, 45) : " "}
                  description={
                    article.description ? article.description.slice(0, 88) : " "
                  }
                  imageUrl={article.urlToImage}
                  blogUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Blog;
