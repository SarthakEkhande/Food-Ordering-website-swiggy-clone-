import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Routes } from 'react-router-dom';
// import { CDN_URL } from '../utils/constant';
import userestaurantMenu from "../utils/userestaurantMenu";
import React from "react";
const Restarantmenu=(props)=>{

    const{resdata}=props;
    // const{cloudinaryImageId}=resdata ?. info;
    // console.log(props);
    // const [resinfo,setresinfo]=useState(null)
    // const [img,setimg]=useState(null)

    let { resid } = useParams();
    console.log(resid);

    const resinfo=userestaurantMenu(resid)




    // useEffect(()=>{
    //     fetchMenu();

    // },[])


 
    // const fetchMenu=async ()=>{
    //     const data=await fetch(MENU_API_URL + 19902)
    //     const json=await data.json();
    //     console.log(json);
    //     setresinfo(json.data)
        
    // }

    // const fetchMenu2=async ()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const json=await data.json();
    //     console.log(json);
    //     setimg(json.data)
        
    // }
    if(resinfo===null)
        return(<Shimmer/>) 
    
     const {name,cuisines,costForTwoMessage,avgRatingString,areaName}=resinfo?.cards[0]?.card?.card?.info;

    // const {cloudinaryImageId}=img?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;
   
    
      const itemcards=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
      console.log(itemcards);


    //  const {header,expiryTime,description}=resinfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info;
    //  console.log(header);
    //    console.log(itemcards);
    return(
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            {/* <h2>{cuisines.join(", ")}</h2>
            <h2>{resinfo?.cards[0]?.card?.card?.info.sla.deliveryTime} mins</h2>
            <h2>{avgRatingString}</h2>
            <h2>{areaName}</h2>
            <h2>{resinfo?.cards[0]?.card?.card?.info.sla.lastMileTravel} Km</h2>  */}
            {/* <h2>{resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.card?.info?.description}</h2> */}
            {/* <img className="res-img" alt="res-img" src={CDN_URL + cloudinaryImageId}></img> */}

            {/* <h2>menu</h2> */}
              <ul>
            {/* {names.map((item)=>(
               <li>{item.name}</li> 
            ))}  */}
            {/* <li>{itemcards?.dish?.info?.name}</li> */}
            {/* <li>{itemcards?.carousel[3]?.dish?.info?.price}</li>
            <li>{itemcards?.carousel[1]?.dish?.info?.name}</li>
             <li>{itemcards?.carousel[2]?.dish?.info?.name}</li>
             <li>{itemcards?.carousel[3]?.dish?.info?.name}</li>
            <li>{}</li> */}
             {/* { <li>{resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.card?.itemCards[0]?.info.name}</li> } */}
             {/* <li>{itemcards[1].card.info.name}</li> */}
             {/* <li>{header}</li>
             <li>{expiryTime}</li>
             <li>{description}</li>
             <li>{name}</li>
             <li>{cuisines}</li>
             <li>{costForTwoMessage}</li> */}
            
              {Array.isArray(itemcards) && itemcards.map((item) => (
               <li key={item?.dish?.info?.name}>{item?.dish?.info?.name}  {item?.dish?.info?.price/100}</li>
      ))}
                {/* { <li>{name}</li>
                <li>Burgars</li>
                <li>Diet Coke</li>
                <li></li> */}
            </ul>
        </div>
    )
}

export default Restarantmenu;