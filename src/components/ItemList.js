import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_IMG } from "../utils/constants";
const ItemList = ({itemList}) => {
    // const {itemCards} = item;
    console.log("it",itemList);

    const dispatch = useDispatch();
    const handleItems = (items) =>{
        dispatch(addItem(items));
    }

    return(
        <div>
        {/* //     <ul> */}
        {/*        {itemCards.map((items)=>( */}
                    {/* <li key={items?.card?.info?.id}> */}

                        <div className="font-semibold text-left">
                        {itemList?.card?.info?.name}
                        <img className="content-end w-20 h-20 rounded-lg" alt="res-logo" src={ CDN_IMG + itemList?.card?.info?.imageId}></img>
                        <span onClick={() => handleItems(itemList)} className="rounded-lg p-2 text-white bg-black">add+</span>
                        </div> 
                        <div className="font-semibold text-left"> ₹
                        {itemList?.card?.info?.price/100 || itemList?.card?.info?.defaultPrice/100}
                        </div> 
                        <div className="font-extralight text-left">
                            {itemList?.card?.info?.description}
                        </div>


                        {/* // </li> */}
                {/* ))} */}
            {/* </ul> */}
        </div>
    )
}

export default ItemList;