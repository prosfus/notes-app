import { useAppDispatch } from "../../../redux/hooks"
import {  setLogged } from "../../../redux/slices/AuthSlice"
import {  signInWithGoogle } from "../../../util/auth/AuthManager"

export const LoginWithGoogleButton = ()=>{

    const dispatch = useAppDispatch()

    const handleLogin = ()=>{
        signInWithGoogle().then((res)=>{
            if(!res.error){
                console.log('Login success');
                dispatch(setLogged(true));
            }
        })
    }

    return (
        <div 
            onClick={handleLogin}
            className="text-2xl cursor-pointer font-bold py-3 px-6 bg-back-blue text-li-blue hover:bg-gray-800 rounded-lg">
            Log in with Google
            
        </div>
    )
}