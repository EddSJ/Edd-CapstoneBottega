import React from "react";
import { useSelector } from "react-redux";
import { getAllItems } from "../../redux/items/itemSlice";
import ItemCard from "./itemCard";
import ItemDetailModal from "./itemDetailModal";

const ItemsListing = () => {

    const items = useSelector(getAllItems);

    let renderItems = "";

    renderItems = items.length > 0 
    ? (items.map(item => {
        return (
        <ItemCard item={item} key={item.id} />
        )
    })
    ) : (<div>
        <h1>No items found</h1>
    </div>);
    
    return (
        <div className="item-grid-container__all-items">
            {renderItems}
            <ItemDetailModal />
        </div>
    );
}

export default ItemsListing;