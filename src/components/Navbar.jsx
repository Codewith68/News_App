import React, { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

function Navbar({ className }) {
  const { setNews, fetchNews } = useNewsContext();
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef(null);
  const searchTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    };
  }, []);

  const showTopNewsToast = () => {
    setShowToast(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setShowToast(false), 2000);
  };

  const handleTopNewsClick = async () => {
    const data = await fetchNews("/top-headlines?country=us");
    setNews(data || []);
    showTopNewsToast();
  };

  const searchNews = (e) => {
    const searchValue = e.target.value;

    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);

    if (!searchValue.trim()) return;

    searchTimerRef.current = setTimeout(async () => {
      setNews([]);
      const data = await fetchNews("/everything?q=" + searchValue);
      setNews(data || []);
    }, 1000);
  };

  return (
    <div className={`bg-base-200 ${className}`}>
      <Wrapper>
        <div className="navbar shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">NEWS</a>
          </div>
          <div className="flex gap-2">
            <input
              onChange={searchNews}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button onClick={handleTopNewsClick} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </Wrapper>

      {showToast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-info">
            <span>Top news loaded</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
