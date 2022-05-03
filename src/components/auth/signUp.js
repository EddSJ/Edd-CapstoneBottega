import React, {useState} from "react";
import axios from "axios";


const SignUp = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");


    async function createUser(userData) {
        try {
            console.log(userData);
    
    
            const response = await axios ({
                method: 'POST',
                url: "https://api-store-loggin-ed.herokuapp.com/register",
                data: userData
                
            })
            console.log(response);
            setMsg(response.data.message);
            console.log(msg);
            return response
        } 
        catch (error) {
            console.log(error)
        }
    }

    const handleRegisterUser = (event) => {
        event.preventDefault();
        const userData = {
            username: user,
            email: email,
            password: password
        }

        createUser(userData);

    }

    const handleChangeUser = (event) => {
        setUser(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }


    return (
        <div className="form-container">
            <h1>
                Sign Up
            </h1>
            <form className="auth-forms" onSubmit={handleRegisterUser}>
                <label htmlFor="username">User name</label>
                <input type="text" id="username" placeholder="example" value={user} onChange={handleChangeUser} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="user@user.com" value={email} onChange={handleChangeEmail} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="cool data" value={password} onChange={handleChangePassword} />
                <button className="form-btn" type="submit">Sign Up</button>
            </form>
            <h3>{msg}</h3>
        </div>
    )
}

export default SignUp;