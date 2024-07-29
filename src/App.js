import React from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';

import Layout from './Layout';
import PageHome from './components/sectionPages/PageHome';
import PageShop from './components/sectionPages/PageShop';
import PageShopDetail from './components/sectionPages/PageShopDetail';
import PageCart from './components/sectionPages/PageCart';
import PageCheckout from './components/sectionPages/PageCheckout';
import PageTestimonial from './components/sectionPages/PageTestimonial';
import Page404 from './components/sectionPages/Page404';
import PageContact from './components/sectionPages/PageContact';





function App(){

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<PageHome/>} />
        <Route path="/shop" element={<PageShop/>} />
        <Route path="/shop-detail" element={<PageShopDetail/>} />
        <Route path="/cart" element={<PageCart/>} />
        <Route path="/checkout" element={<PageCheckout/>} />
        <Route path="/testimonial" element={<PageTestimonial/>} />
        <Route path="/404page" element={<Page404/>} />
        <Route path="/contact" element={<PageContact/>}/>
      </Route>
    </Routes>

    
    
  );
}

export default App;

