import React, {useState} from 'react';
import './Login.css';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import './firebase.config';

const Login = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const handleOnChange = (e) => {
        const newUser = {
            ...user
        };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(user);
    }
    const handleOnSubmit = (e) => {

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(
                (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setUser({success:true})
                    // ...
                }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        e.preventDefault()
    }
    return (
        <div className="main-login">
            <h1 className="login-logo">OSARIS</h1>
            <h2 className="login-title">Log In</h2>
            <div className="main-login-container">
                <div className="login-container">
                    <form onSubmit={handleOnSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                onChange={handleOnChange}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                onChange={handleOnChange}/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary login-btn">Log In</button>
                        <p className="mt-3 text-center">don't have accout?<span className="signup-link">
                                Creat an Accout.</span>
                        </p>
                        {user.success && <p className="text-success text-center">Congratultions login successFull</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;