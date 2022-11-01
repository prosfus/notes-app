import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import { selectAuth } from "../../redux/slices/AuthSlice"

export const Main = ()=>{
    const auth = useAppSelector(selectAuth)

    useEffect(()=>{
        console.log(auth)
    }, [auth])

    return (<>
        {
            auth.isLogged ? <Navigate to="/journal"/> : <Navigate to="/login"/> 
        }
    </>)
}
