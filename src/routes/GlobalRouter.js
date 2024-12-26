import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import BookstoreDetails from '../views/BookstoreDetails';
import NotFound from '../views/NotFound';
import { Overview } from '../views/Overview';
import {Header} from "../components/Header";

function GlobalRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/books" element={<Layout><Overview /></Layout>}/>
                <Route path={"/books/:id"} element={<Layout><BookstoreDetails /></Layout>}/>
                <Route path="*" element={<Layout><NotFound /></Layout>}/>
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;