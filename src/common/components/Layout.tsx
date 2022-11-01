import { SideBar } from "./SideBar/SideBar";

type Props = {
    active: string
    children: React.ReactNode,
  };

export const Layout: React.FC<Props> = ({active, children})=>{
    return <div className="flex flex-row w-screen h-screen">
        <SideBar active={active}/>
        {children}
    </div>
}