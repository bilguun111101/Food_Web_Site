import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export const Authenticate = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user  = userCredential.user
        })
        .catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
        })
}