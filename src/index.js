import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import './App.css';
import MainBody from './components/mainBody';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Registration from './components/Registration';
import Cart from './components/Cart';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
    <Header />
    <Routes>
      <Route path='/' element={<MainBody />} />
      <Route path='/catalog' element={<Catalogue />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<Product />} />
    </Routes>
    <Footer />
  </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
