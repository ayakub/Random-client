import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvidor = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { createUser, login }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;