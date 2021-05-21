import React from "react";
import Header from "./Header";

const LastMonth = (props) => {

  return (
    <div>
      <Header />
      <div className="content">
        <ul>
          {props.MonthNews.map((allNews) => (
            <li key={allNews.title}>{allNews.title}</li>
          ))}
          </ul>
      </div>
    </div>
  );
};

export default LastMonth;
