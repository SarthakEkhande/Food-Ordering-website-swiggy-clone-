import { useEffect, useState } from "react";
import React from "react";
import { MENU_API_URL } from "./constant";

const userestaurantMenu=(resid)=>{

    const[resinfo,setresinfo]=useState(null)
    
//fetch data
useEffect(()=>{
    fetchdata();

},[])

const fetchdata=async ()=>{
    const data=await fetch(MENU_API_URL + resid)

    const json=await data.json();
    setresinfo(json.data);



}
 


    return resinfo;

}

export default userestaurantMenu;