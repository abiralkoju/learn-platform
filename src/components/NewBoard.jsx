import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles || []); // Ensure it's always an array
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger mt-3">News</span>
      </h2>
      {error ? (
        <div className="alert alert-danger">
          Failed to load articles: {error}
        </div>
      ) : (
        <div className="row">
          {articles && articles.length > 0 ? (
            articles.map((news, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
              >
                <NewsItem
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              </div>
            ))
          ) : (
            <p>No articles available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewBoard;
