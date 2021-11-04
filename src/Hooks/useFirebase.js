import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import InitiaLizeAuthentication from '../Pages/Login/Firebase/firebase.init';

InitiaLizeAuthentication()

const Usefirebase = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true)
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
            })
            .finally(() => setIsLoading(false))


    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUsers({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }
    return {
        users,
        isLoading,
        error,
        googleSignIn,
        logOut,
    }
}
export default Usefirebase;
