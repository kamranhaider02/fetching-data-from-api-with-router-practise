import React from "react";
import Header from "./Header";
const TopHeadlines = (props) => {
  console.log(props.news);
  return (
    <div>
      <Header />
      <h3 className="topNews">Top headlines news</h3>
      <div className="content">
        <ul>
          {props.news.map((allNews) => (
            <li key={allNews.title}>{allNews.title}</li>
          ))}
          </ul>
      </div>
    </div>
  );
};

export default TopHeadlines;
