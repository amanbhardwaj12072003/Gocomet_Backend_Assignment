import React, { Component } from "react";
import BlogItem from "./BlogItem";

export class Blog extends Component {

  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c333e89ae39a47dfaa2be2fb1888b809";
    const data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState(
      {
        articles : parsedData.articles,
      }
    )
  }

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
                  description={article.description ? article.description.slice(0, 88) : " "}
                  imageUrl={article.urlToImage}
                  blogUrl={article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
