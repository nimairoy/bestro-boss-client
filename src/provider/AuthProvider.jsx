import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    // create user with email password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user with email password
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser)
            setUser(currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    // console.log(data.data.token)
                        localStorage.setItem('access_token', data.data.token)
                        setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access_token')
            }
            
        })

        return () => {
           return unsubscribe();
        }
    }, [])

    // sign out
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logout,
        signInWithGoogle,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;