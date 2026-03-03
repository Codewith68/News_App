# News App

A responsive React news application that fetches live articles from [NewsAPI](https://newsapi.org/) with category filters, search, and top-headlines support.

## Features

- Live news feed using NewsAPI (`/everything` and `/top-headlines`)
- Debounced search from navbar input
- One-click Top US Headlines button
- Category-based filtering (`business`, `entertainment`, `general`, `science`, `sports`, `technology`, `health`)
- Loading state with spinner while data is being fetched
- Responsive card-based UI built with Tailwind CSS + DaisyUI
- Shared global state via React Context API

## Tech Stack

- React 19 + Vite
- Axios
- Tailwind CSS 4
- DaisyUI

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Catagory.jsx
    Loader.jsx
    Footer.jsx
    Wrapper.jsx
  config/
    axios.js
  context/
    NewsContext.jsx
  pages/
    News.jsx
  App.jsx
  main.jsx
```

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd News_App
npm install
```

### 2. Configure environment variables

Create a `.env` file in the root:

```env
VITE_API_KEY=your_newsapi_key_here
```

Get your API key from: [https://newsapi.org/register](https://newsapi.org/register)

### 3. Run the app

```bash
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Notes

- Base URL: `https://newsapi.org/v2`
- Requests are made from the browser using your `VITE_API_KEY`
- Free NewsAPI plans may have CORS and rate-limit restrictions in production

## Current Behavior

- Initial load fetches `india` related articles
- Search input waits ~1 second before firing request (debounce)
- Clicking article card button opens full article in a new tab

## Improvements You Can Add

- Pagination / infinite scrolling
- Better empty-state and error-state UI
- Source/date filters
- Bookmark functionality
- Dark mode toggle

## License

This project is for learning/practice. Add a license if you plan to distribute it.
