import React, { useState } from 'react';
import axios from 'axios';
import showToast from 'crunchy-toast';
import './Login.css';
import logo from '../../components/assets/logo.png';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const login = async () => {
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password,
            });

            if (response.data.success) {
                showToast('Login Successfully', 'success', 3000);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                window.location.href = '/';
            } else {
                showToast('Invalid email or password', 'warning', 3000);
            }
        } catch (error) {
            console.error(error);
            showToast('Invalid email or password', 'warning', 3000);
        }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

    return (<>
   
          <div>
            <h1 className="login-title">Connect and Share..</h1>
          </div>
        <div className="main-container-login">


            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80" alt="Background" />
            </div>

            <div className="form-container">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <p className="welcome-text">Welcome back!</p>

                <div className="input-container">
                    <label htmlFor="LoggingEmailAddress" className="label">Email Address</label>
                    <input
                        id="LoggingEmailAddress"
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-container">
                    <div className="flex justify-between">
                        <label htmlFor="loggingPassword" className="label">Password</label>
                        {/* <a href="#" className="forgot-password">Forget Password?</a> */}
                    </div>
                    <div className="password-input">
                    <input
                        id="loggingPassword"
                        className="input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className={`eye-icon ${showPassword ? 'open' : 'closed'}`} onClick={togglePasswordVisibility}></i>
                </div>
                </div>

                <div className="signin-button-container">
                    <button className="signin-button" onClick={login}>Sign In</button>
                </div>

                <div className="or-divider">
                    <span className="divider-line"></span>
                    <a href="/signup" className="signup-link">or sign up</a>
                    <span className="divider-line"></span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;


// import React, {useState} from 'react'
// import axios from 'axios'
// import showToast from 'crunchy-toast';
// import "./Login.css"

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const login = async () => {
//     try {
//       const response = await axios.post('/login', {
//         email: email,
//         password: password,
//       });
  
//       if (response.data.success) {
//         showToast('Login Successfully', 'success', 3000);
//         localStorage.setItem('user', JSON.stringify(response.data.data));
//         window.location.href = '/community';
//       } else {
//         showToast('Invalid email or password', 'warning', 3000);
//       }
//     } catch (error) {
//       console.error(error);
//       showToast('Invalid email or password', 'warning', 3000);
//     }
//   };
  
  

//   return (
//     <div className='login-page-background'>
//       <div className='login-container'>
//         <h1 className='login-title'>LogIn</h1>

//         <div className='input-container'>
//             <label className='input-label'>Email</label>
//             <input
//                 type='email'
//                 placeholder='xyz@example.com'
//                 className='input-field'
//                 value={email}
//                 onChange={(e)=>{
//                   setEmail(e.target.value)
//                 }}
//                 />
                
//           </div>

//         <div className='input-container'>
//             <label className='input-label'>Password</label>
//             <input
//                 type='password'
//                 placeholder='Enter your password'
//                 className='input-field'
//                 value={password}
//                 onChange={(e)=>{
//                   setPassword(e.target.value)
//                 }}
//                 />
//         </div>

//         <button className='login-btn' onClick={login}>
//           Login
//         </button>

//         <div className='login-signup-btn'>
//           <p>not have an account?<a href='/signup'>Signup</a></p>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

