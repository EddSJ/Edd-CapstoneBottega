import React from "react";
import { useSelector } from "react-redux";
import { itemsOnCart } from "../../redux/items/cartSlice";

import CartCard from "./cartCard";


const DisplayCart = () => {
    const cartItems = useSelector(itemsOnCart);
    console.log(cartItems);

    let cartRender = "";

    cartRender = cartItems.length > 0 
    ? (cartItems.map(item => {
        return <CartCard key={item.id} item={item} />;
    })) : (<div className="page-header">
        <h1>No items on Cart yet</h1>
    </div>);
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    const total2D = total.toFixed(2);



    return (
        <div className="container">
            <div className="page-header">
                <h2>Items on your cart</h2>
            </div>
            {cartRender}
            <div className="page-header">
                <h3>Total: ${total2D}</h3>
            </div>
        </div>
    )
}

export default DisplayCart;