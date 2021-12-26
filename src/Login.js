import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase"


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                history('/')
            })
            .catch(error => alert(error.message))
             // popup if possible
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history('/')
                }
            })
            .catch(error => alert(error.message))
            // popup if possible
    }

    return (
        <div className='login'>
            <Link to="/checkout">
                <div className="login__logoContainer">
                    <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon Logo" />
                </div>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>

                <form >
                    <h5>E-Mail</h5>
                    <input type="email"  value={ email } onChange={ e => setEmail(e.target.value) }/>

                    <h5>Password</h5>
                    <input type="password" value={ password } onChange={ e => setPassword(e.target.value) }/>

                    <button type='submit' className='login__signInButton' onClick={ signIn }>Sign in</button>
                    <button className='login__registerButton' onClick={ register } >Create New Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
