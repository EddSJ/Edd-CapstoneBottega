import React from "react";
import { Link, Navigate } from "react-router-dom";
import lobo from "../assets/lobo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { itemsOnCart } from "../redux/items/cartSlice";
import { openModal } from "../redux/modal/modalSlice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const itemsCart = useSelector(itemsOnCart);
  const [cookies, removeCookie] = useCookies(["userId"]);

  const navigate = useNavigate();

  const handleLogOut = () => {
    removeCookie("userId");
    navigate("/");
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={lobo} alt="logo" />
          </Link>
        </div>

        {cookies["userId"] !== "undefined" ? (
        <div className="nav-logout">
            <div className="car-out">
                <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} /> ({itemsCart.length})
                </Link>
            </div>

          <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogOut} />
        </div>
        ) : (
          <div className="nav-signin">
            <Link to="/login">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
