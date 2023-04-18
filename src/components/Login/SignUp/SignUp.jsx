import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const SignUp = () => {
    return (
        <div>
             <div className='bgg'>
         <div className='login-containerr'>
            <h1 className='title'>Sign Up Now</h1>
            <form >
               <div className='form'>
               <label className='lbl' htmlFor="email">Enter Your Email</label><br />
                <input type="email" placeholder='email' />
               </div>
               <div>
               <label className='lbl' htmlFor="password">Enter Your Password</label><br />
                <input type="password" placeholder='Password' />
               </div>
               <div>
               <label className='lbl' htmlFor="password">confirm Your Password</label><br />
                <input type="password" placeholder='Password' />
               </div>
            </form>
            <button className='login-btn'>Login</button>
            <p className='s'><Link className='link' to="/login">Alrady have an Account?</Link> </p>
            <div className='line'>
            <div><hr className='b' /></div>
            <div className='c'><span className='d'>or</span> <hr className='b' /></div>
            </div>
            <button className='google-btn'><FcGoogle className='google-icon'/>Continue with Google</button>
            <button className='google-btn'><BsGithub className='google-icon'/>Continue with GitHub</button>
        </div>
       </div>
        </div>
    );
};

export default SignUp;