import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="main-login">
            <h1 className="login-logo">OSIRIS</h1>
            <h2 className="login-title">Log In</h2>
            <div  className="main-login-container">
                <div className="login-container">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn">Submit</button>
                    <p className="mt-3 text-center">don't have accout?<span className="signup-link"> Creat an Accout.</span></p>
                    </form>
            </div>
            </div>
        </div>
    );
};

export default Login;