import {useState, useEffect} from "react"
import React from "react"
import { Link } from "react-router-dom"
import UseOnlineStatus from "../utils/UseOnlineStatus"


import Restorantcardcomponent from './Restorantcardcomponent'

// import reslist from '../utils/mockdata'
import Shimmer from "./Shimmer"
import Restarantmenu from "./Restarantmenu"



const Body=()=> {

    //state variable-- super powerful variable
     //for that we use the react hooks
     //if we creeating a filter in our app but the ui is not updated so we need to used hook the update it successfully

     //hooks is a normal javascript function gives us the function written some logic inside react

     const[listofrestaurants,setlistofrestaurants]=useState([]);

     const[filteredrestaurant,setfilteredrestaurant]=useState([]) 

     const[searchtext,setsearchtext]=useState("")

     useEffect(()=>{

     })

     useEffect(()=>{
      fetchData();
       },[]);

       const fetchData=async () =>{
         const data= await fetch
         ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         )

         const json=await data.json();
        //  console.log(json);
         setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       }


    const onlinestatus=UseOnlineStatus()

    if(onlinestatus===false) return <h1>Looks like you are offline!! please cheak your internet connection</h1>
       
  //  console.log("body rendered");


    // let listofrestaurantsjs=[
    //     {
    //         "info": {
    //           "id": "10576",
    //           "name": "Pizza Hut",
    //           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //           "costForTwo": "₹350 for two",
    //           "deliveryTime": 23,
    //           "avgRating": 4.1,
    //           "cuisines": [
    //             "Pizzas"
    //           ],                 
    //          }
    //     },
    
        if(listofrestaurants.length===0){
          return <Shimmer/>
        }
    // ];
  return  (
    <div className="body">
    <div className="flex">
    <div className="m-4 p-4">
      <input type="text" className="border border-solid border-black " 
      value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}/>
      <button className="px-4 py-1 bg-green-300 m-4  rounded-lg" onClick={()=>{
        //filter the restarant card and update the ui
        console.log(searchtext)
        const filterrestaurant = listofrestaurants.filter((res) =>
             res?.info?.name?.toLowerCase().includes(searchtext.toLowerCase())
            //  res.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.info.name.toLowerCase.includes(searchtext)
  );

        setfilteredrestaurant(filterrestaurant)
     
      }}>Search</button>

    </div>
     <div  className="m-4 p-4 flex items-center">
     <button className='px-4 py-1 bg-gray-200  rounded-lg' onClick={()=>{
      const filterList=listofrestaurants.filter((res)=> res.info.avgRating > 4)
      setfilteredrestaurant(filterList);
      
    }}>Top Rated Restorant</button>
     </div>
    </div>
    <div className="flex flex-wrap">

     {Array.isArray(filteredrestaurant) && filteredrestaurant.map((info) => (
     <Link key={info.info.id} to={"/restaurantsmenu/"+info.info.id }><Restorantcardcomponent  resdata={info} /></Link>
     
   
      
      ))}

       </div>
      </div>
  
  )
}

export default Body