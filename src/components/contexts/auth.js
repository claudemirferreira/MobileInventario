import React, { useState } from 'react'
import { createContext } from 'react';

export const AuthContextData = {
    loading: false,
    signed: false,
    user: {},
    signOut: () => ({}),
    onSignIn: () => ({})
}

const AuthContext = createContext(AuthContextData);

export default AuthContext;

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);


    function onSignIn(user) {
        setUser(user);
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ 
            loading: loading,
            signed: user ? true : false, 
            user: user, 
            signOut: signOut,
            onSignIn: onSignIn
        }}>
            {children}
        </AuthContext.Provider>
    )
} 