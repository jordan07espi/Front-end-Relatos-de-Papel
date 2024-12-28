import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from "../views/Landing";
import BookstoreDetails from "../views/BookstoreDetails";
import NotFound from "../views/NotFound";
import { Overview } from "../views/Overview";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SearchProvider, SearchContext } from "../context/SearchContext";
import { CartProvider } from "../context/CartContext";
import Cart from "../components/Cart";
import Checkout from "../views/Checkout"; // Importamos el componente Checkout
import "../styles/styles.css";

function GlobalRouter() {
  return (
      <BrowserRouter>
        <SearchProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/books" element={<Overview />} />
                <Route path="/books/:id" element={<BookstoreDetails />} />
                <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </CartProvider>
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
      <div className="layout">
        <div className="main-content">
          {location.pathname !== "/" && <Header onSearch={handleSearch} />}
          {children}
        </div>
        {location.pathname !== "/" && <Cart />}
      </div>
  );
};

export default GlobalRouter;
