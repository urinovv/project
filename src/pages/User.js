// User.js
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";
import Footer from "../components/Footer.js";
import '../styles/User.css';
import SettingsIcon from '@mui/icons-material/Settings';

export default function User() {
    const [userData, setUserData] = useState({});
    const [phone, setPhone] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const currentUser = auth.currentUser;

    useEffect(() => {
        if (currentUser) {
            const fetchData = async () => {
                try {
                    const docRef = doc(db, "users", currentUser.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                        setPhone(docSnap.data().phone || "");
                    }
                } catch (err) {
                    toast.error("Error retrieving data!");
                }
            };
            fetchData();
        }
    }, [currentUser]);

    const handlePhoneSave = async () => {
        try {
            await updateDoc(doc(db, "users", currentUser.uid), { phone });
            setUserData(prev => ({ ...prev, phone }));
            toast.success("Phone number updated successfully!");
        } catch (err) {
            toast.error("Error while updating phone number!");
        }
    };

    const handlePasswordSave = async () => {
        if (!newPassword.trim()) return toast.error("Please enter your password!");
        try {
            await updatePassword(currentUser, newPassword);
            setNewPassword("");
            toast.success("Password updated successfully!");
        } catch (err) {
            toast.error("Error while updating password!");
        }
    };

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) setPhotoFile(e.target.files[0]);
    };

    const handlePhotoSave = async () => {
        if (!photoFile) return toast.error("Please choose a picture!");
        setLoading(true);
        try {
            const storageRef = ref(storage, `profilePictures/${currentUser.uid}`);
            await uploadBytes(storageRef, photoFile);
            const photoURL = await getDownloadURL(storageRef);
            await updateProfile(currentUser, { photoURL });
            await updateDoc(doc(db, "users", currentUser.uid), { photoURL });
            setUserData(prev => ({ ...prev, photoURL }));
            toast.success("Error while uploading profile picture!");
        } catch (err) {
            toast.error("Error while uploading profile picture!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-user w-100 m-0 d-flex flex-column align-items-center justify-content-center">
            <h2 className={"d-flex flex-row w-auto gap-2"}> <SettingsIcon className={"d-flex fs-1"}/> Profil sozlamalari</h2>
            <div className="profile-section mt-4 w-75 d-flex flex-column gap-2 pt-5 pb-5">

                <hr/>

                <div className={"d-flex flex-column align-items-center justify-content-center w-100"}>
                    <div className="mb-3 p-2 d-flex align-items-center justify-content-center" style={{ border: "1px solid black", width: "100px", height: "100px", borderRadius: "50%" }}>
                        <img
                            src={userData.photoURL || currentUser?.photoURL || "/default-profile.png"}
                            alt="Profile"
                        />
                    </div>
                    <div className="mb-3 d-flex gap-2 flex-row align-items-center justify-content-center">
                        <input type="file" onChange={handlePhotoChange}/>
                        <button disabled={loading} onClick={handlePhotoSave} className="btn btn-primary ms-2 w-auto">
                            Save Photo
                        </button>
                    </div>
                </div>

                <hr/>

                <div className="mb-2 d-flex flex-row align-items-center justify-content-center w-100 gap-3">
                        <label className={"d-flex w-25"}>Phone Number</label>
                        <input
                            type="text"
                            className="form-control w-100"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    <button onClick={handlePhoneSave} className="btn btn-primary w-25">Save Phone</button>
                </div>

                <hr/>

                <div className="d-flex flex-row align-items-center justify-content-center w-100 gap-3">
                    <label className={"d-flex w-25 m-0 p-0"}>New Password</label>
                    <input
                        type="password"
                        className="form-control w-100"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <button onClick={handlePasswordSave} className="btn btn-primary m-0 w-25">Save Password</button>
                </div>

                <hr/>

            </div>
            <Footer/>
        </div>
    );
}
