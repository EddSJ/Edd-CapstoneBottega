import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import DisplayCart from './components/cart-manege/displayCart';
import FormAddItem from './components/form/formAddItem';
import UpdateItem from './components/form/updateItem';
import AuthManege from './components/auth/authManege';
import NotFound from './components/notFound';
import { useCookies } from "react-cookie";




function App() {

  const [cookies] = useCookies(["userId"]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<AuthManege />} />
        {cookies["userId"] !== "undefined" ? <Route path="/cart" element={<DisplayCart />} /> : null}
        {cookies["userId"] !== "undefined" ? <Route path='add-item' element={<FormAddItem />} /> : null}
        {cookies["userId"] !== "undefined" ? <Route path='update-item/:slug' element={<UpdateItem />} /> : null}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
