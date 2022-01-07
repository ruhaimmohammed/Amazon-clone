import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Payment from './Payment';


toast.configure();
function App() {
  const [{ }, dispatch] = useStateValue();

  const popUp = (msg, name) => {
    toast.success(msg + name, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const popUpError = (msg, name) => {
    toast.warn(msg + name, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const popUpWarn = (msg) => {
    toast.error(msg , {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser) {
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
          <Route path="/login" element={<Login popUpWarn={popUpWarn}/>} />
          <Route path="/" element={<Home popUp={popUp} popUpError={popUpError} />} />
          <Route path="/checkout" element={<Checkout popUp={popUp} popUpError={popUpError} />} />
          <Route path="/payment" element={ <Payment popUp={popUp} popUpError={popUpError}/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
