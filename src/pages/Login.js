import React, { useState, useEffect } from "react";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [email, setEmail] = useState(localStorage.getItem("savedEmail") || "");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem("savedEmail");
        if (savedEmail) setEmail(savedEmail);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (rememberMe) localStorage.setItem("savedEmail", email);
            else localStorage.removeItem("savedEmail");

            toast.success(`Logged in as ${email}`);
            navigate("/");
        } catch (error) {
            let message = "";
            if (error.code === "auth/invalid-email") message = "❌ Wrong email or haven't registered yet.";
            else if (error.code === "auth/user-not-found") message = "❌ Can not find this user.";
            else if (error.code === "auth/wrong-password") message = "❌ Incorrect password.";
            else message = "❌ " + error.message;
            setErrorMsg(message);
            toast.error(message);
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
            <h2 className="mb-4 text-center">Login</h2>
            {errorMsg && <div className="alert alert-danger w-100 text-center" style={{ maxWidth: "400px" }}>{errorMsg}</div>}
            <form onSubmit={handleLogin} style={{ maxWidth: "400px", width: "100%" }}>
                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="input-group mb-3">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" className="btn" style={{ outline: "none", border: "1px solid #dee2e6" }} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </button>
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button className="btn btn-warning w-100 text-white" type="submit">Login</button>
            </form>
        </div>
    );
}
