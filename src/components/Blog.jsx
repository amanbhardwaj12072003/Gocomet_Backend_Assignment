import React, { Component } from "react";
import BlogItem from "./BlogItem";

export class Blog extends Component {
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
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=1&pageSize=10";
    const data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=${
      this.state.page - 1
    }&pageSize=10`;
    const data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c333e89ae39a47dfaa2be2fb1888b809&page=${
        this.state.page + 1
      }&pageSize=10`;
      const data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Wanna read interesting blogs? </h2>

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <BlogItem
                  title={article.title ? article.title.slice(0, 45) : " "}
                  description={
                    article.description ? article.description.slice(0, 88) : " "
                  }
                  imageUrl={article.urlToImage}
                  blogUrl={article.url}
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
          >
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Blog;
