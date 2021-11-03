import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.config"
const InitiaLizeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default InitiaLizeAuthentication;