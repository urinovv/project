import React, {useState} from 'react';
import '../styles/Login.css';
import {NavLink} from "react-router-dom";

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className={"login-page d-flex flex-column align-items-center justify-content-center"}>
            <div className={"login-container d-flex flex-row align-items-center justify-content-center w-100 h-100"}>
                <form className={"login-form d-flex flex-column align-items-center justify-content-center gap-5"}>
                    <h1 className={"login-header"}>LogIn to Shoplite</h1>

                    <div
                        className={"field-container d-flex flex-column align-items-center justify-content-center w-100 gap-3"}>
                        {/* Email */}
                        <label htmlFor="email" className={"w-75 fs-5 fw-light"}>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="d-flex w-100 bg-transparent rounded p-2 fs-5"
                                required
                            />
                        </label>

                        {/* Password */}
                        <label htmlFor="password" className={"w-75 fs-5 fw-light"}>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                className="d-flex w-100 bg-transparent rounded p-2 fs-5"
                                required
                            />
                        </label>

                        {/* Show password toggle */}
                        <label htmlFor="passwd" className="w-75 fw-light d-flex bg-transparent rounded p-0 gap-2 fs-6">
                            <input
                                type="checkbox"
                                id="passwd"
                                checked={showPassword}
                                onChange={() => setShowPassword(prev => !prev)}
                            />
                            Show password
                        </label>
                    </div>

                    <div className={"w-100 d-flex flex-column align-items-center justify-content-center gap-3"}>
                        <button type={"submit"} className={"btn btn-warning text-white w-50 p-2 fs-5"}>LogIn</button>
                        <p>Don't have an account? <NavLink to={"/register"}
                                                           className={"text-decoration-none"}>Register</NavLink></p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;