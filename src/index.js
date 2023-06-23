import React from 'react';
import ReactDOM from 'react-dom/client'
import "./sass/index.css";
import { RouterProvider, BrowserRouter } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Header />
      </header>
    </BrowserRouter>
    <main>
      <RouterProvider router={App} />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);
 

