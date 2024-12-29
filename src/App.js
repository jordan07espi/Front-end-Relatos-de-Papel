import React from 'react';
import GlobalRouter from './routes/GlobalRouter';
import { BookstoreContext } from './context/BookstoreContext';
import { useBookstore } from './hooks/useBookstore';
import './App.css';

function App() {
    const bookstore = useBookstore();

    return (
        <BookstoreContext.Provider value={{ bookstore }}>
            <div className="app-content">
                <GlobalRouter />
            </div>
        </BookstoreContext.Provider>
    );
}

export default App;