import React, { useEffect, useState } from "react"
const User=({name})=>{



    const[count,setcount]=useState(0)
    const[count1,setcount1]=useState(1)

    useEffect(()=>{
        //API calls

        const timer=setInterval(() => {
            console.log("namaste react OP");

        }, 1000);

        return()=>{
            clearInterval(timer)
        }
    })

    function add(count){
        setcount(count+1)
    }
    function sub(count){
        setcount(count-1)
    }
    return(
        <div className="user-card">
        <h1>count:{count}</h1>
        <h1>count:{count1}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: 9764135683</h4>

        </div>
    )

}

export default User