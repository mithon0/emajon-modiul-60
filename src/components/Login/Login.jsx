import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const Login = () => {
    return (
       <div className='bg'>
         <div className='login-container'>
            <h1 className='title'>Login</h1>
            <form >
               <div className='form'>
               <label className='lbl' htmlFor="email">Enter Your Email</label><br />
                <input type="email" placeholder='email' />
               </div>
               <div>
               <label className='lbl' htmlFor="password">Enter Your Password</label><br />
                <input type="password" placeholder='Password' />
               </div>
            </form>
            <button className='login-btn'>Login</button>
            <p className='s'>New to Ema-john? <Link className='link' to="/signup">Create New Account</Link> </p>
            <div className='line'>
            <div><hr className='b' /></div>
            <div className='c'><span className='d'>or</span> <hr className='b' /></div>
            </div>
            <button className='google-btn'><FcGoogle className='google-icon'/>Continue with Google</button>
            <button className='google-btn'><BsGithub className='google-icon'/>Continue with GitHub</button>
        </div>
       </div>
    );
};

export default Login;