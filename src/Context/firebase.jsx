import { createContext, useContext, useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBlOkAhFXR53_nmCimVfGxcRitDwQXCiUw",
    authDomain: "skillshareindia-fc13e.firebaseapp.com",
    projectId: "skillshareindia-fc13e",
    storageBucket: "skillshareindia-fc13e.appspot.com",
    messagingSenderId: "53342430544",
    appId: "1:53342430544:web:402294594cd9f8254eb855"
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const storage = getStorage(FirebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        try {
            onAuthStateChanged(FirebaseAuth, (user) => {
                if (user) {
                    setUser(user);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);
                }
            });
        } catch (error) {
            console.error("Error in onAuthStateChanged: ", error);
        }
    }, []);

    const signUpUserWithEmail = async (email, pass) => {
        try {
            await createUserWithEmailAndPassword(FirebaseAuth, email, pass);
        } catch (error) {
            console.error("Error in signUpUserWithEmail: ", error);
        }
    };

    const signInUserWithEmail = async (email, pass) => {
        try {
            await signInWithEmailAndPassword(FirebaseAuth, email, pass);
            console.log("Success in signing user");
        } catch (error) {
            console.error("Error in signInUserWithEmail: ", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(FirebaseAuth);
            setIsLoggedIn(false);
            console.log("Signout success");
        } catch (error) {
            console.error("Error in logout: ", error);
        }
    };

    return (
        <FirebaseProvider.Context
            value={{
                signUpUserWithEmail,
                signInUserWithEmail,
                isLoggedIn,
                logout,
                
            }}
        >
            {props.children}
        </FirebaseProvider.Context>
    )
}

export default FirebaseProvider;
