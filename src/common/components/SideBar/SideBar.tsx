
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { SideButton } from "./components/SideButton"

type SideBarProps = {
    active: string,
}

export const SideBar = (props: SideBarProps)=>{
    return (
    <div className='flex flex-col gap-4 h-full w-80 bg-side-gray items-center py-12 text-white text-lg'>
       <SideButton icon={faBook} label={'Journal'} active={props.active}/>
       <SideButton icon={faCalendarDays} label={'Le garot'} active={props.active}/>
    </div>)
}