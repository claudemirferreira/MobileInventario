import React, { useState } from 'react'
import { createContext } from 'react';
import api from '../../services/api'

export const AuthContextData = {
    loading: false,
    signed: false,
    loginFailed: false,
    errorMessage: '',
    user: {},
    signIn: Promisse => ({}),
    signOut: () => ({})
}

const AuthContext = createContext(AuthContextData);

export default AuthContext;

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loginFailed, setLoginFailed] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);

    async function signIn(username, password)  {
        
        try {
            setLoading(true);
            const response = await api.post('user/authentication', {
                username: 'nelsonsozinho',
                password: 'nelsonsozinhow'
            });
            setLoading(false);
            setUser(response.data);
        } catch(ex) {
            setUser(null);
            setLoginFailed(true);
            setErrorMessage(ex.message);
            setLoading(false);
        }
        
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ 
            loading: loading,
            signed: user ? true : false, 
            user: user, 
            signIn: signIn, 
            signOut: signOut, 
            loginFailed: loginFailed,
            errorMessage: errorMessage
        }}>
            {children}
        </AuthContext.Provider>
    )
} 