import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
 

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth
        .onAuthStateChanged(authUser => {
          console.log('THE USER IS >>>', authUser);

          if(authUser){
            // User is logged in

            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          } else {
            // The user is looged out
            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
