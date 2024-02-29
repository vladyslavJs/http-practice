import axios from 'axios'
import { useState, useEffect } from 'react'
import ArticlesList from '../ArticleList/ArticleList'
// import './App.css'

export default function App() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    async function getArticles() {
      // HTTP запит
      const response = await axios.get("http://hn.algolia.com/api/v1/search?query=react");
      setArticles(response.data.hits)
     
    }
    getArticles();
  }, []);

  return (
    <>
      <p>HTTP</p>
      <div>
        {articles.length > 0 && <ArticlesList items={articles} />}
      </div>
    </>
  )
}


