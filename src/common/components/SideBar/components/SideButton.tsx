import { faBook, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

type SideButtonProps = {
    icon: IconDefinition
    label: string
    active: string
}

export const SideButton = (props: SideButtonProps)=>{

    const [isActive, setIsActive] = useState(props.label === props.active ? 'bg-back-blue' : '')
    
    
    

    return (
    
        <div className={isActive + ' w-48 h-10 flex cursor-pointer flex-row items-center justify-start gap-3 rounded-md hover:bg-li-blue px-5 py-3'}>
            <FontAwesomeIcon icon={props.icon} color="white"/>
            <h1>{props.label}</h1>
        </div>
    )
}