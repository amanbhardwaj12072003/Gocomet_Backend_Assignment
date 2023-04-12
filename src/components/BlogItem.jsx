import React, { Component } from "react";

export class BlogItem extends Component {

  render() {
    let { title, description, imageUrl, blogUrl } = this.props;
    let defaultImageUrl = "https://mma.prnewswire.com/media/1608177/GoComet_Logo.jpg?p=facebook";
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl ? imageUrl : defaultImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={blogUrl} target="_blank" className="btn btn-sm btn-primary">
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
