import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBlOkAhFXR53_nmCimVfGxcRitDwQXCiUw",
    authDomain: "skillshareindia-fc13e.firebaseapp.com",
    projectId: "skillshareindia-fc13e",
    storageBucket: "skillshareindia-fc13e.appspot.com",
    messagingSenderId: "53342430544",
    appId: "1:53342430544:web:402294594cd9f8254eb855"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const storage = getStorage(FirebaseApp);

// Specify the allowed user email
const allowedEmail = "admin@example.com"; // Set your own admin email

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        try {
            onAuthStateChanged(FirebaseAuth, (user) => {
                if (user && user.email === allowedEmail) {
                    setUser(user);
                    setIsLoggedIn(true);
                } else {
                    setUser(null);
                    setIsLoggedIn(false);
                    if (user) {
                        alert("Unauthorized user! Only one admin can log in.");
                        logout();
                    }
                }
            });
        } catch (error) {
            console.error("Error in onAuthStateChanged: ", error);
        }
    }, []);

    // Function to upload an image
    const uploadImage = async (file) => {
        if (!file) return;
        const imageRef = ref(storage, `images/${file.name}`);
        try {
            await uploadBytes(imageRef, file);
            console.log("Image uploaded successfully.");
            fetchImages(); // Refresh the image list after upload
        } catch (error) {
            console.error("Error uploading image: ", error);
        }
    };

    // Function to fetch the URLs of stored images
    const fetchImages = async () => {
        const imagesListRef = ref(storage, 'images/');
        try {
            const response = await listAll(imagesListRef);
            const urls = await Promise.all(response.items.map((item) => getDownloadURL(item)));
            setImageUrls(urls);
        } catch (error) {
            console.error("Error fetching images: ", error);
        }
    };

    // Function to delete an image
    const deleteImage = async (imageUrl) => {
        const imageRef = ref(storage, imageUrl);
        try {
            await deleteObject(imageRef);
            console.log("Image deleted successfully.");
            fetchImages(); // Refresh the image list after deletion
        } catch (error) {
            console.error("Error deleting image: ", error);
        }
    };

    // Function to sign in a user with email and password
    const signInUserWithEmail = async (email, pass) => {
        try {
            if (email === allowedEmail) {
                await signInWithEmailAndPassword(FirebaseAuth, email, pass);
                console.log("Success: User signed in");
            } else {
                console.error("Unauthorized user attempt");
                alert("Access denied: Unauthorized user.");
            }
        } catch (error) {
            console.error("Error signing in user: ", error);
        }
    };

    // Function to sign up a user (optional, in case you want to create the account)
    const signUpUserWithEmail = async (email, pass) => {
        try {
            if (email === allowedEmail) {
                await createUserWithEmailAndPassword(FirebaseAuth, email, pass);
            } else {
                alert("Sign-up restricted to admin only.");
            }
        } catch (error) {
            console.error("Error signing up user: ", error);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await signOut(FirebaseAuth);
            setIsLoggedIn(false);
            console.log("Signout success");
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <FirebaseContext.Provider
            value={{
                signUpUserWithEmail,
                signInUserWithEmail,
                isLoggedIn,
                logout,
                uploadImage,
                fetchImages,
                deleteImage,
                imageUrls
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
