import React from "react";

const BlogItem = (props) => {
  let { title, description, imageUrl, blogUrl, author, date, source } = props;
  let defaultImageUrl =
    "https://mma.prnewswire.com/media/1608177/GoComet_Logo.jpg?p=facebook";
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className=" badge rounded-pill bg-danger"
            style={{
              zIndex: "1",
              left: "90%",
            }}
          >
            {source}
          </span>{" "}
        </div>
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
};

// Hello this is a git check
export default BlogItem;
