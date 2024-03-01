import { useState, useEffect } from 'react'
import ArticlesList from '../ArticleList/ArticleList'
import css from './App.module.css'
import { fetchArticles } from '../article-api';
import SearchForm from '../SearchForm/SearchForm';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import { FcPlus } from "react-icons/fc";


// HTTP запит потрібно виконати коли буде нова query, тобто submit форма і ми отримуємо нову query,
// Нова сторінка

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
// HTTP запит не потрібно робити коли порожній імпут, тому робимо таку логіку. В результаті ми перевіряємо якийсь вираз і якщо це try, то код знизу просто не виконується!
    if (searchQuery === '') {
      return;
    }

    async function getData() {
      try {
        const data = await fetchArticles(searchQuery, page);
        setArticles((prevArticles) => {return[...prevArticles, ...data]}); //операція від попереднього, без перезаписування
      } catch (error) {
        console.log(error);
        setError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
    getData();
    }, [page, searchQuery])
  
  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    // setIsLoading(true);
    // setError(false);
    setArticles([]); //так ми скидаємо масив даних, щоб почати пошук з порожньої інформації
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    
  };

  // const handleSearch = async (newQuery) => {
  //   try {
  //     console.log(newQuery);

  //     setIsLoading(true);
  //     setError(false);
  //     setArticles([]);
  //     const data = await fetchArticles(newQuery, page);
  //     setArticles(data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   }
  //   finally {
  //     setIsLoading(false);
  //   }
  // };

    return (
      <div>
        <p className={css.title}>HTTP request <GiNewspaper /> </p>
        <SearchForm onSearch={handleSearch} />
        {isLoading && <span>Loading articles... <AiOutlineLoading3Quarters /></span>}
        {error && <span>Server not found <RiSignalWifiErrorLine /></span>}
        <div className={css.container}>
          {articles.length > 0 && <ArticlesList items={articles} />}
        </div>
        {articles.length > 0 && <button onClick={handleLoadMore}>Load more<FcPlus /></button>}
      </div>
    )
} 


  // useEffect(() => {
  //   async function getArticles() {
  //     // HTTP запит
  //     const data = await fetchArticles();
  //     setArticles(data);
  //   }

  //   getArticles();
  // }, []);