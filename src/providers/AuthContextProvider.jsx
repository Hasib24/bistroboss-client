import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { getAuth } from "firebase/auth";
import { app } from '../../firebase.config';
import axios from 'axios';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const AuthContex = createContext(null)

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }


    const googleSignIn = () =>{
    
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile =(name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }
    
    const logOut = () =>{
            return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{

            console.log(currentUser);

            //get and set JWT token 
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email : currentUser.email})
                .then(data=>{
                    localStorage.setItem('access-token', data.data.token);
                    setUser(currentUser)
                    setLoader(null)

                })
            }else{
                localStorage.removeItem('access-token')
                setLoader(null)

            }

        })

        //stop observing after unmount
        return unsubscribe()
    },[])

    const userInfo ={
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        signInUser,
        googleSignIn,
        updateUserProfile,
        logOut
    }

 

    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContextProvider;