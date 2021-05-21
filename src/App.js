import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import LastMonth from "./Components/LastMonth";
import TopHeadlines from "./Components/TopHeadlines";

function App() {
  const [Headlines, setHeadlines] = useState([]);
  useEffect(() => {
    headlinesNews();
  }, []);
  const headlinesNews = async () => {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c162d1766194b13a152a04331aeed7a"
    );
    let d1 = await data.json();
    setHeadlines(d1.articles);
  };
    const [LastMonthNews, setLastMonthNews] = useState([]);
    useEffect(() => {
      LastMonthNewsData();
    }, []);
    const LastMonthNewsData = async () => {
      let data = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-04-17&sortBy=publishedAt&apiKey=2c162d1766194b13a152a04331aeed7a"
      );
      let dataFinal = await data.json();
      setLastMonthNews(dataFinal.articles);
    };
    const fblink = "https://web.facebook.com/kamrankhosa007";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="topheadlines" element={<TopHeadlines news={Headlines} />} />
        <Route path="LastMonthNews" element={<LastMonth MonthNews={LastMonthNews} />} />
        <Route path="about" element={<About />} />
      </Routes>
      <p className="clear"></p>
      <Footer fblink={fblink}/>
    </BrowserRouter>
  );
}

export default App;
