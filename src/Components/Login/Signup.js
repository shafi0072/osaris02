import React, {useState} from 'react';
import './Login.css';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import './firebase.config';




const Signup = () => {
    const [user, SetUser] = useState({});
    const handleOnChange = (e) => {
        const newUser = {
            ...user
        };
        newUser[e.target.name] = e.target.value;
        SetUser(newUser);
        console.log(user);
    }
    const handleOnSubmit = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(
                (userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("work successfully")
                    SetUser({success:true});
                }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        e.preventDefault()
    }
    return (
        <div className="main-login">
            <h1 className="signup-logo">OSARIS</h1>
            <h2 className="login-title">Create an account</h2>
            <div className="main-login-container">
                <div className="login-container">
                    <form onSubmit={handleOnSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="fN"
                                onChange={handleOnChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="LN"
                                onChange={handleOnChange}/>
                        </div>
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
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="confirmPassword"
                                onChange={handleOnChange}/>
                        </div>
                        {user.password === user.confirmPassword &&<button type="submit" class="btn btn-primary login-btn">Create Profile</button>}
                     <p className="mt-3 text-center">Have you an accout?<span className="signup-link">
                        Log in</span>
                    </p>
                    {user.password !== user.confirmPassword && <p className="text-danger">Sorry buddy the password isn't match</p>}
                    {user.success && <p className="text-success">Congratulations Buddy your account created successfully</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;