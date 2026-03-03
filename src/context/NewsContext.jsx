import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchNews = async (url='/everything?q=india') => {
    try {
        setLoading(true);
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setLoading(false);
      return response.data.articles;
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const value = { news, setNews, fetchNews, loading};
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };

//
