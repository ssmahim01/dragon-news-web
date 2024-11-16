import { createContext, useEffect, useState } from "react";
// Initialize Firebase Authentication and get a reference to the service
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../firebase/firebase.config";
import { toast } from "react-toastify";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;
const gitHubProvider = new GithubAuthProvider;

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

    const logInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    const logOut = () => {
        setLoading(true);
        toast.success("Logout success", {
            position: "top-center"
        });
        return signOut(auth);
    };

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const userResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        userLogin,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        updateUserProfile,
        userResetEmail
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