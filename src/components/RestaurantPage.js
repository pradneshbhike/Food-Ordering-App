import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ItemCard from "./ItemCard";

const RestaurantPage = () => {
    const [showIndex,setShowIndex] = useState(0);
    const resId = useParams();
    const restoData = useRestaurantData(resId.id);

    const category = restoData?.filter((category)=>{
        return category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        <div>
        {(category==null || category == undefined) ? (<div><h2>Loading.............</h2></div>) :
        (<div>
            <ul className="">
            {category.map((c,index) => (
                <li className="w-6/12  mx-auto text-center border-b-2"key={c.card?.card?.title}>
                    <ItemCard items={c.card?.card} showItem={index==showIndex && true} setShowIndex={() => setShowIndex(index)}/>
                </li>))} 
            </ul>
        </div>)}
        </div>
    )
}

export default RestaurantPage;