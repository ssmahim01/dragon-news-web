import { createContext, useEffect, useState } from "react";
// Initialize Firebase Authentication and get a reference to the service
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData);
    };

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        userLogin,
        logInWithGoogle,
        logOut,
        updateUserProfile
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;