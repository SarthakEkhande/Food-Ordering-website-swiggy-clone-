import React from 'react'
import { CDN_URL } from '../utils/constant';
// import { Star } from 'react-bootstrap-icons';
import { MdStars } from "react-icons/md";
// import { HiCurrencyRupee } from "react-icons/hi2";

const Restorantcardcomponent=(props)=> {
    const{resdata}=props;

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resdata ?. info;

    // console.log(props);
    return (
        <div className="m-4 p-4 w-[260px] bg-grey rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="flex m-1"><MdStars/>{avgRating}</h4>
            <h4> {resdata.info.sla.deliveryTime} mins</h4>
            <h5>{costForTwo}</h5>
            <h5>{cuisines.join(", ")}</h5>
          
            

        </div>
    )
}

export default Restorantcardcomponent