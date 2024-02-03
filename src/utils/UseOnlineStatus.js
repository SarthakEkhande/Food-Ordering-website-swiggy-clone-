import { useEffect, useState } from "react";

const UseOnlineStatus=()=>{
    //cheak if online and return it will online status
    
    const [onlinestatus,setonlinestatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false);
        })

        window.addEventListener("online",()=>{
            setonlinestatus(true);
        })
    })

    return onlinestatus;
}

export default UseOnlineStatus