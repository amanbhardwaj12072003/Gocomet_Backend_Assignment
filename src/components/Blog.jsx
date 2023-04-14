import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Blog = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `Gocomet - ${capitalizeFirstLetter(props.category)}`

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const handlePrevClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">
        Wanna Read {capitalizeFirstLetter(props.category)} Blogs ?{" "}
      </h1>
      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles.map((article) => {
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
          onClick={handlePrevClick}
          disabled={page <= 1}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        >
          Next &rarr;{" "}
        </button>
      </div>
    </div>
  );
};

Blog.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

Blog.propType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Blog;
