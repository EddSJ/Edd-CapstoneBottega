import React, {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SignIn = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [cookies, setCookie, ] = useCookies("userId");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    async function loginUser(userData) {
        try {
            console.log(userData);
    
    
            const response = await axios ({
                method: 'POST',
                url: "https://api-store-loggin-ed.herokuapp.com/login",
                data: userData,
            });
            console.log(response);
            setMsg(response.data.message);
            if (response.data.loggedin) {
                const userID = response.data.id;
                setCookie("userId", userID, { path: "/" });
                console.log(cookies["userId"]);
                dispatch(setCredentials(true));
                navigate("/");
            } else {
                dispatch(setCredentials(false));
            }
            return response
        } 
        catch (error) {
            console.log(error)
        }
    }

    const handleLoginUser = (event) => {
        event.preventDefault();

        const userData = {
            username: user,
            password: password
        }
        
        loginUser(userData);
    }

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="form-container">
            <h1>
                Sign In
            </h1>
            <form className="auth-forms" onSubmit={handleLoginUser}>
                <label htmlFor="username">User name</label>
                <input type="text" id="username" placeholder="exaple" value={user} onChange={handleChangeUser} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="password" value={password} onChange={handleChangePassword} />
                <button className="form-btn" type="submit">Sign In</button>
            </form>
            <h3>
                {msg}
            </h3>
        </div>
    )
}

export default SignIn;