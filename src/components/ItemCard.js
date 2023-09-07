import ItemList from "./ItemList";
import { useState } from "react";
const ItemCard = ({items, showItem ,setShowIndex}) =>{
    const { title } = items;
    console.log("items",items);
    // const[showItems,setShowItems] = useState(false);
    return(
        <div onClick={() => setShowIndex()} >
            <li
                className="font-bold text-centre p-5 cursor-pointer hover:bg-slate-100">
                    {title} ⬇️
            </li>
            <div>
            <ul>
            <li>
                {items?.itemCards?.map((item)=>(
                    showItem && <ItemList itemList={item}/>
                ))}
            </li>
            </ul>
            </div>
            
        </div>
    )
}

export default ItemCard;