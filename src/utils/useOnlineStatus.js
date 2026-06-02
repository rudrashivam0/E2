import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true);

    //? Check if Online 

    useEffect(() => {
        //? if user is offlien the set statue false 
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        })
        //? id user is online the the set the status is online or true 
        window.addEventListener("online", () => {
            setonlineStatus(true);
        })
    }, [])

    //? A boolean value to display status
    return onlineStatus;
}


export default useOnlineStatus