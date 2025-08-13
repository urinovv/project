import React, {useState} from 'react';
import '../styles/Register.css';
import {NavLink} from "react-router-dom";

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className={"register-page d-flex flex-column align-items-center justify-content-center"}>
            <div className={"register-container d-flex flex-row align-items-center justify-content-center w-100 h-100"}>
                <form className={"register-form d-flex flex-column align-items-center justify-content-center gap-5"}>
                    <h1 className={"register-header"}>Register for Shoplite</h1>

                    <div
                        className="field-container d-flex flex-column align-items-center justify-content-center w-100 gap-3">
                        {/* Name input */}
                        <label htmlFor="name" className="w-75 fw-light">
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="d-flex w-100 bg-transparent border-0 rounded p-2"
                                required
                            />
                        </label>

                        {/* Email input */}
                        <label htmlFor="email" className="w-75 fw-light">
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="d-flex w-100 bg-transparent rounded p-2"
                                required
                            />
                        </label>

                        {/* Password input */}
                        <label htmlFor="password" className="w-75 fw-light">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                className="d-flex w-100 bg-transparent rounded p-2"
                                required
                            />
                        </label>

                        {/* Confirm Password input */}
                        <label htmlFor="password" className="w-75 fw-light">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Submit the password"
                                className="d-flex w-100 bg-transparent rounded p-2"
                                required
                            />
                        </label>

                        {/* Show Password toggle */}
                        <label htmlFor="show-password"
                               className="w-75 fw-light d-flex bg-transparent rounded p-0 gap-2 fs-6">
                            <input
                                type="checkbox"
                                id="show-password"
                                checked={showPassword}
                                onChange={() => setShowPassword(prev => !prev)}
                            />
                            Show password
                        </label>
                    </div>

                    <div className={"w-100 d-flex flex-column align-items-center justify-content-center gap-3"}>
                        <button type={"submit"} className={"btn btn-warning text-white w-50 p-2 fs-5"}>Register</button>
                        <p>Already have an account? <NavLink to={`/login`}
                                                             className={"text-decoration-none"}>LogIn</NavLink></p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;