import React, { useEffect } from "react";
// import ListingItems from "./items/listingItems";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/items/itemSlice";
import axios from "axios";
import ItemsListing from "./items-manege/itemsListing";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";




const Home = () => {

    const [cookies] = useCookies(["userId"]);

    const myApi = "https://api-store-ed.herokuapp.com/productos"
    // const myApi = "http://localhost:5000/productos"

    const dispatch = useDispatch();


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(myApi)
            .catch(err => console.log(err));
            dispatch(addItems(result.data));
        
        }
        fetchItems();
        }, []);


    return (
        <div className="container">
            <div className="page-header">
                <h1>All our Items</h1>
            </div>
            <ItemsListing />
            {cookies["userId"] !== "undefined" ? ( <div className="add-icon">
                <Link to="/add-item">
                    <FontAwesomeIcon icon={faCirclePlus} />
                </Link>
            </div>)
            : (null)
            }


        </div>
    )
}

export default Home;