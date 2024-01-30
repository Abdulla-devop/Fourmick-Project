import SideBar from "./sidebar";
import TopBar from "./topbar";

//workspace used  in edit form
export default function WorkSpace({children}){
    return(
        
         <div className="flex flex-col w-full border-opacity-50 h-screen">
            <div className="grid h-20 card rounded-box place-items-center bg-secondary">
                <TopBar/>
            </div>
        <div className="flex flex-nowrap rounded-box place-items-center h-screen">
            <div className="grid flex-grow h-full w-1/6  bg-secondary">
                 <SideBar/>
            </div>
             <div className="grid flex-grow h-full w-5/6">{children}</div> 
              </div>
         </div>
    )
}