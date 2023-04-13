import React, { Component } from "react";

export class BlogItem extends Component {
  render() {
    let { title, description, imageUrl, blogUrl, author, date, source } =
      this.props;
    let defaultImageUrl =
      "https://mma.prnewswire.com/media/1608177/GoComet_Logo.jpg?p=facebook";
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
            zIndex:'1',
            left:'90%',
          }}>
            {source}
          </span>{" "}
          <img
            src={imageUrl ? imageUrl : defaultImageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {date ? new Date(date).toGMTString() : "Some Date"}
              </small>
            </p>
            <a
              href={blogUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// Hello this is a git check
export default BlogItem;
