import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
            <h1>Hello front-end WORLD !!!</h1>
            <h3>This is a react app </h3>
            <Header />
            <Main />
            <Main />
            <Main />
            <Footer />
    </>
)