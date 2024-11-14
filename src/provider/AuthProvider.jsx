import { createContext, useEffect, useState } from "react";
// Initialize Firebase Authentication and get a reference to the service
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        setUser,
        createNewUser
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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