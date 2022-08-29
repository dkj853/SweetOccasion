import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import '../public/css/bootstrap.css'; this needs to be imported on the index.html in the public folder
import NavBar from './components/NavBar/index.js';
import Home from './components/pages/Home/Home'
import Order from "./components/pages/Order.js"
import Items from "./components/pages/Items/Items.js"
import Contact from "./components/pages/Contact/Contact"
// import Comments from './components/pages/Contact/Comments'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="order" element={<Order />} />
        <Route path="contact" element={<Contact />} />
       
   
      </Routes>
    </Router>
  );
}

export default App;
