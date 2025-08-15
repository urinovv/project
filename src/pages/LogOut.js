import React from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);

            if (!localStorage.getItem("savedEmail") || !localStorage.getItem("savedPassword")) {
                localStorage.removeItem("savedEmail");
                localStorage.removeItem("savedPassword");
            }

            alert("You have logged out!");
            navigate("/login");
        } catch (error) {
            alert("Error while Logging Out: " + error.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100vw" }}>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    );
}
