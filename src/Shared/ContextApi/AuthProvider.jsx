import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Authentication/firebase.config";


export const authData=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)



    const auth=getAuth(app)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
        setUser(currentUser)}
    ) 
    return()=>{
        unsubscribe()
    } 
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }





const authInfo = {createUser , logUser , logOut ,user ,auth ,loading};
    return (
        <authData.Provider value={authInfo}>
                {children}
        </authData.Provider>
    );
};

export default AuthProvider;