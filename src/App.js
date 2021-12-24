import React from 'react';
import './App.css';
import Main from "./Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={ <h2>Login Page</h2> } />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
