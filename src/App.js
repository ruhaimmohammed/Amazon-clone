import React from 'react';
import './App.css';
import Main from "./Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
