import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import InitiaLizeAuthentication from '../Pages/Login/Firebase/firebase.init';

InitiaLizeAuthentication()

const Usefirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                setUsers(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });

    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUsers({})
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        users,
        error,
        googleSignIn,
        logOut,
    }
}
export default Usefirebase;
