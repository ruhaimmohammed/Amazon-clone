import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase"


function Login({ popUp, popUpWarn }) {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
                popUp( "Login " , "Successfully" )
            })
            .catch(error => popUpWarn(error.message))
        // popup if possible
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history('/')
                }
                popUp( "Account " , "Created Successfully" );
            })
            .catch(error => popUpWarn(error.message))
        // popup if possible
    }

    return (
        <div className='login'>
            <Link to="/checkout">
                <div className="login__logoContainer">
                    <img className='login__logo' src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-FL-Logo-by-Greenlines-Studios-580x387.jpg" alt="Amazon Logo" />
                </div>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>

                <form >
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign in</button>
                </form>
            </div>
            <div className="login__container__2" style={{ marginTop: "10px" }}>
                <button className='login__registerButton' onClick={register} >Create New Account</button>
            </div>
        </div>
    )
}

export default Login
