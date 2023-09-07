// import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const useRestaurantData = (resId) => {
    const [resInfo,useResInfo] = useState(null);
    console.log("---------",resId);
    useEffect(() => {
        MenuData()
    },
    []);
    
    const MenuData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId="+resId);
        const jsonData = await data.json();
        useResInfo(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
        // console.log(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
    };
    return resInfo;
}

export default useRestaurantData;