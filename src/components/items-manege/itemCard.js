import { useDispatch } from "react-redux";
import  { addItem } from "../../redux/items/cartSlice";
import { openModal } from "../../redux/modal/modalSlice";
import { fillModal } from "../../redux/modal/modalContentSlice";
import { deleteProduct } from "../form/metodFunction";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faCircleInfo,
    faTrash,
    faPenToSquare
  } from "@fortawesome/free-solid-svg-icons";



const ItemCard = (props) => {
    

    const dispatch = useDispatch();
    const addCart = () => {
        const itemsCart = {
            id: id,
            title: nombre,
            category: categoria,
            description: description,
            price: precio,
            image: imagen
        } 
        dispatch(addItem(
            itemsCart
        ));
    }

    const [cookies] = useCookies(["userId"]);



    const startModal = () => {
        dispatch(openModal());
        dispatch(fillModal(props.item));
    }

    const _deleteProduct = () => {
        deleteProduct(id);
    }

    const { id, nombre, categoria, description, precio, imagen } = props.item;


    return (
        <div className="item-container" >
            <div className="grid-item-container__all-itmes">
                <div className="item-imagen">
                    <img src={imagen} alt={nombre} />
                </div>
                <div className="item-info">
                    <h2>
                        {nombre}
                    </h2>
                    <h3>
                        precio: ${precio}
                    </h3>
                    <h3>
                        categoria: {categoria}
                    </h3>
                </div>
                { cookies["userId"] !== "undefined" ? (
                    <div className="auth-btns">
                        <div className="add-i">
                            <FontAwesomeIcon icon={faCartPlus} onClick={addCart} />
                        </div>
                        <FontAwesomeIcon icon={faCircleInfo} onClick={startModal} />
                        <div className="trash">
                            <FontAwesomeIcon icon={faTrash} onClick={_deleteProduct}  />
                        </div>
                        <Link to={`update-item/${id} `}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                    </div>
                ): (null)}

            </div>
        </div>
    );
}

export default ItemCard;