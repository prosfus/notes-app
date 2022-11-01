import moment, { Moment } from 'moment'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { setDay } from '../../../redux/slices/JournalSlice'

export const DaysBar = ()=>{

    const [days, setDays] = useState([] as moment.Moment[])
    const [activeDay, setActiveDay] = useState(moment())
    const dispatch = useAppDispatch()

    const handleDaySelect = (day: moment.Moment)=>{
        setActiveDay(day)
        dispatch(setDay(day.toString()))
    }

    useEffect(()=>{
        const days = []
        if(moment().day()===0){
            for(let i = -7; i < 1; i++){
                days.push(moment().day(i))
            }
        }else {
            for(let i = 1; i < 8; i++){
                days.push(moment().day(i))
            }
        }
        
        setDays(days)
        
    },[])

    return (
        <div className='flex flex-row gap-3 justify-center items-center text-white'>
            {days.map((day, key)=>{
                
                
                return (
                <div key={key}
                    onClick={()=>handleDaySelect(day)}
                    className={
                    (activeDay.format('D') == day.format('D') ? 'bg-back-blue ':'') + 
                    "  py-1 w-28 cursor-pointer hover:bg-gray-800 flex flex-col items-center rounded-md"}>

                    <div className="text-li-blue font-bold">
                        {day.format('ddd')}
                    </div>
                    <div className="font-bold text-4xl">
                        {day.format('D')}
                    </div>
                </div>
                )
            })}
        </div>
    )
}