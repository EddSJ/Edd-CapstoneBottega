import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/items/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const CartCard = (props) => {
    const { id, title, category, description, price, image } = props.item;
    const dispatch = useDispatch();

    const quitItem = () => {
        dispatch(removeItem( id ));
    }


    return (
        <div className="item-grid-container__item-info">
            <div className="cart-item">
                <div className="cart-item__image">
                    <img src={image} alt={title} />
                </div>
                <div className="cart-item__title">
                    <h3>{title}</h3>
                </div>
                <div className="cart-item__category">
                    <h4>Category: {category}</h4>
                </div>
                <div className="cart-item__description">
                    <p>{description}</p>
                </div>
                <div className="cart-item__price">
                    <p>${price}</p>
                </div>
                <div className="cart-item__icon">
                    <FontAwesomeIcon icon={faTrash} onClick={quitItem}  />
                </div>
            </div>
        </div>
    )
}

export default CartCard;