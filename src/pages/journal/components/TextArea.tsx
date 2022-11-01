import moment from "moment"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../redux/hooks"
import { selectJournal } from "../../../redux/slices/JournalSlice"

export const TextArea = ()=>{

    const day = useAppSelector(selectJournal).daySelected
    const [daySelected, setDaySelected] = useState(moment())

    useEffect(()=>{
        
        setDaySelected(moment(day))
    },[day])

    return (
    <div className="flex flex-col items-center w-full">
    
        
        <input className="text-3xl font-bold w-1/2 outline-none bg-transparent text-white rounded-md p-3" value={daySelected.toString()}>
          
        </input>
        
    </div>
    )
}