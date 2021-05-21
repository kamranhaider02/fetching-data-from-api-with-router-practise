export const headlinesNews = async () => {
    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c162d1766194b13a152a04331aeed7a"
    );
    let d1 = await data.json();
    return d1.articles;
  };
  headlinesNews();