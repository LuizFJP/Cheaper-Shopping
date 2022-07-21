import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddProduct, Emblem, Home, ListProducts, Login, Product, Profile, Todo, Ranking } from "./routes"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/add-product" element={<AddProduct />}/>
      <Route path="/emblem" element={<Emblem />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/list-products" element={<ListProducts />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/todo" element={<Todo />}/>
      <Route path="/ranking" element={<Ranking />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
