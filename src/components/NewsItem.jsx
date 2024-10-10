import React from "react";
import news from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ width: "100%", maxWidth: "345px" }}
    >
      <img
        src={src ? src : news}
        className="card-img-top"
        alt="news"
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News description not found. The description for this news ERRROR! Will be displayed Loading!"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
