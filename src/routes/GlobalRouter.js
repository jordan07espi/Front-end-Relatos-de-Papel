import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import BookstoreDetails from '../views/BookstoreDetails';
import NotFound from '../views/NotFound';
import { Overview } from '../views/Overview';
import { Header } from "../components/Header";
import { SearchProvider, SearchContext } from '../context/SearchContext';

function GlobalRouter() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/books" element={<Layout><Overview /></Layout>} />
          <Route path="/books/:id" element={<Layout><BookstoreDetails /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => {
  const { setSearchQuery } = useContext(SearchContext);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      {children}
    </>
  );
};

export default GlobalRouter;