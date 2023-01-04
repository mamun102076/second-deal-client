import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser) 
        })
        return () => unsubscribe()
    },[])

    const googleLogin = provider => {
        return signInWithPopup(auth,provider)
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser,userInfo)
    }

    const logout = () => {
        signOut(auth)
    }

    const authInfo = {createUser,signIn,user,googleLogin,updateUser,logout}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;