// context/UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const unsubscribeDoc = onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        // Agar foydalanuvchi document mavjud bo'lmasa
                        setDoc(userDocRef, {
                            username: currentUser.displayName || "",
                            email: currentUser.email || "",
                            phone: "",
                            photoURL: currentUser.photoURL || ""
                        });
                    }
                });
                return () => unsubscribeDoc();
            } else {
                setUserData(null);
            }
        });
        return () => unsubscribeAuth();
    }, []);

    return (
        <UserContext.Provider value={{ user, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
