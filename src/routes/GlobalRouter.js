// src/components/GlobalRouter.js
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from '../views/Landing';
import BookstoreDetails from '../views/BookstoreDetails';
import NotFound from '../views/NotFound';
import { Overview } from '../views/Overview';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SearchProvider, SearchContext } from '../context/SearchContext';

function GlobalRouter() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/books" element={<Overview />} />
            <Route path="/books/:id" element={<BookstoreDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </SearchProvider>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => {
  const location = useLocation();
  const { setSearchQuery } = useContext(SearchContext);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      {location.pathname !== '/' && <Header onSearch={handleSearch} />}
      {children}
    </>
  );
}

export default GlobalRouter;