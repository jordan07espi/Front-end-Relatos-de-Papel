import React from 'react';
import GlobalRouter from './routes/GlobalRouter';
import { BookstoreContext } from './context/BookstoreContext';
import { Footer } from './components/Footer';
import { useBookstore } from './hooks/useBookstore';

function App() {
  const bookstore = useBookstore();
  return (
    <BookstoreContext.Provider value={{ bookstore }}>
      <GlobalRouter />
      <Footer />
    </BookstoreContext.Provider>
  );
}

export default App;