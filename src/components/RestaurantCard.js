import { useContext } from "react";
import { CDN_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {restoData} = props;
    const userName = useContext(UserContext);

    const {name, cuisines, cloudinaryImageId, avgRating} = restoData;
    // console.log(cuisines.slice(0,3));
    return (
        <div className="p-12 m-12 bg-gray-100 rounded-lg">
            <img className="h-48 w-40 rounded-lg" alt="res-logo" src={ CDN_IMG + cloudinaryImageId}></img>
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.slice(0,2).join(", ")}</h4>
            <h3>{avgRating + "⭐️"}</h3>
            <h3>User: {userName.loggedInUser}</h3>
        </div>
    )
}

export default RestaurantCard;