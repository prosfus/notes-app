import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential, OAuthCredential } from "firebase/auth";
import { appAuth } from '../../firebase.js'

export interface AuthResult {
    credential?: OAuthCredential,
    info?: UserCredential,
    error: boolean
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(appAuth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API. 
        return {
            credential: GoogleAuthProvider.credentialFromResult(result),
            info: result,
            error: false
        }  as AuthResult
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, ': ', errorMessage);
        return  {error: true} as AuthResult;
    });
}
