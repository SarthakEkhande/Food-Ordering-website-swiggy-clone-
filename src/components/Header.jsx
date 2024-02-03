import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import UseOnlineStatus from '../utils/UseOnlineStatus'

const Header=()=> {

  //   let btnName="Login"

   const[btnNamereact,setbtnNamereact]=useState("Login")

   const onlinestatus=UseOnlineStatus();

  
  // setclick("Logout")

  console.log("header rendeers");
  
  useEffect(()=>{
    console.log("UseEffect called");
  },[btnNamereact])

  
  return (
    <div className="flex justify-between  shadow-lg m-2 mb-2 h-28  ">
    <div className="logo-container">
        <img className="w-[212px]" src={LOGO_URL}></img>
    </div>
    <div className="flex items-center ">
    <ul className="flex p-8 m-8 ">
        <li>Online Status:{onlinestatus ? " 🟢" : "🔴"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About us</Link></li>
        <li className="px-4"><Link to="/contact">Contact us</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4"><Link to="/restaurants">Restaurants</Link></li>
        <li className="px-4"><Link to="/restaurantsmenu/:resid">Restarantmenu</Link></li>
        <li className="px-4">Cart</li>
        <button 
        className='login'
          onClick={()=>{

            btnNamereact==="Login"
            ? setbtnNamereact("Logout")
             : setbtnNamereact("Login")  
            // console.log(btnNamereact)

            }}
         >{btnNamereact}</button>
    </ul>
    </div>
    </div>
  
  )
}

export default Header