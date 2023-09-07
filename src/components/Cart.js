import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items)
    console.log("insede cart",cartItems);
    
    return(
    <div className="text-center p-5 ">
        <h1 className="font-bold">Cart</h1>
        <ItemList itemList={cartItems[0]}/>
    </div>
    )}

export default Cart;