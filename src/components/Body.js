import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import React, { useState, useEffect } from 'react'; 
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [Data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const[searchText, setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () =>  {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // console.log("api called")
        const json = await data.json();
        console.log(json)
        setData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const online = useOnlineStatus();
    // console.log(online);

    if(online===false) return (<h1>looks like your offline</h1>)

    return (
        <div className="body">
            {(filteredData === undefined) ? <div><h2>Loading.........</h2> </div>:
            <div>
            <div className="content-center">
            <button className="rounded-lg px-4 py-1 bg-red-50 m-8"
                onClick={() =>  {

                    const filteredData = Data.filter((e) => e.info.avgRating>4.0);
                    setFilteredData(filteredData);
                }
                }
            >Filter by ratings 🌟</button>

            
                <input type="search" className="rounded-lg bg-gray-100" value={searchText}  onChange={(e) => setSearchText(e.target.value)}></input>
                <button className="rounded-lg px-4 bg-red-50 m-8" onClick={() => {
                    const filterData = Data.filter((element) => element.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredData(filterData);
                }
                }>search</button>
            </div>

            <div className="flex flex-wrap">
                {filteredData.map((restaurant) => (
                <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}><RestaurantCard restoData = {restaurant.info}/></Link>))}
            </div>
            </div>}
        </div>
    )
}

export default Body;