// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase konfiguratsiyasi
const firebaseConfig = {
    apiKey: "AIzaSyAm_6jfG2iMpA3-r5Z5B9qWh-w6rIjuygE",
    authDomain: "shoplite-8cd38.firebaseapp.com",
    projectId: "shoplite-8cd38",
    storageBucket: "shoplite-8cd38.firebasestorage.app",
    messagingSenderId: "204355976102",
    appId: "1:204355976102:web:9d6257d341079349786d67",
    measurementId: "G-MKPPP6FDLN"
};

// 1️⃣ Firebase app'ni boshlash
const app = initializeApp(firebaseConfig);

// 2️⃣ Auth va boshqa servislarga ulanish
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore (db) va persistence
export const db = getFirestore(app);

enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn('Multiple tabs open, persistence disabled.');
        } else if (err.code === 'unimplemented') {
            console.warn('Persistence not supported in this browser.');
        }
    });

export default app;
