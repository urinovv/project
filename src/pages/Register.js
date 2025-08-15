import React, { useState } from "react";
import { auth, db, googleProvider } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleIcon from '@mui/icons-material/Google';

export default function Register({ toast }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (password !== confirmPassword) {
            setErrorMsg("Password doesn't match!");
            toast.error("Password doesn't match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                email,
                createdAt: new Date()
            });
            toast.success("Registered successfully!");
        } catch (error) {
            setErrorMsg(error.message);
            toast.error(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                createdAt: new Date()
            });

            toast.success("Successfully registered with Google!");
        } catch (error) {
            setErrorMsg(error.message);
            toast.error(error.message);
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
            <h2 className="mb-4 text-center">Register</h2>

            {/* Xatolik UI ko‘rinishi */}
            {errorMsg && (
                <div className="alert alert-danger w-100 text-center" style={{ maxWidth: "400px" }}>
                    {errorMsg}
                </div>
            )}

            <form onSubmit={handleRegister} style={{ maxWidth: "400px", width: "100%" }}>
                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control mb-3"
                    placeholder="Submit the password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="showPassword"
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label className="form-check-label" htmlFor="showPassword">
                        Show password
                    </label>
                </div>
                <button className="btn btn-warning text-white w-100 mb-2" type="submit">Register</button>
                <button
                    type="button"
                    className="btn bg-white w-100 d-flex align-items-center justify-content-center flex-row gap-1"
                    style={{ border: "1px solid black" }}
                    onClick={handleGoogleSignUp}
                >
                   <GoogleIcon/> Sign up with Google
                </button>
            </form>
        </div>
    );
}
