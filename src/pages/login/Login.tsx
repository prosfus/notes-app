import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/slices/AuthSlice";
import { LoginWithGoogleButton } from "./components/LoginWithGoogleButton";

export const Login = ()=>{
    
    const auth = useAppSelector(selectAuth)

    return (<div className="flex flex-row w-screen h-screen items-center justify-center gap-20">
        <h1 className="text-white font-bold text-5xl">Login</h1>
        <div>
            <LoginWithGoogleButton/>
        </div>
        {
          auth.isLogged && <Navigate to="/"/>  
        }
    </div>)
}