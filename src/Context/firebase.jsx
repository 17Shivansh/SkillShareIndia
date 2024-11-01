import { createContext, useContext} from "react";
import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, collection} from "firebase/firestore";
import { getStorage, ref, getDownloadURL} from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "skillshareindia-admin.firebaseapp.com",
    projectId: "skillshareindia-admin",
    storageBucket: "skillshareindia-admin.appspot.com",
    messagingSenderId: "343570437474",
    appId: "1:343570437474:web:f631609587cc30b6b0c83b"
};

const FirebaseApp = initializeApp(firebaseConfig);
const FireStore = getFirestore(FirebaseApp);
const storage = getStorage(FirebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const getImageURL = async (path) => {
        try {
            if (!path) throw new Error("Invalid file path");
            const fileRef = ref(storage, path);
            return await getDownloadURL(fileRef);
        } catch (error) {
            console.error('Error in getImageURL: ', error);
        }
    };
    
    const getEvents = async () => {
        try {
            const eventsInfo = getDocs(collection(FireStore, "events"));
            console.log("events", eventsInfo);
            return await eventsInfo;
        } catch (error) {
            console.error("Error in getArticles: ", error);
        }
    };

    const displayPhotos = async () => {
        try {
            const photoCollectionRef = collection(FireStore, 'photos');
            const photoDocs = await getDocs(photoCollectionRef);
            
            return photoDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching photos: ', error);
            return [];
        }
    };

    return (
        <FirebaseContext.Provider
            value={{
                getImageURL,
                getEvents,
                displayPhotos,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};
