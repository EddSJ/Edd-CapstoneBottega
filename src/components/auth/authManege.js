import React, {useState} from "react";
import SignIn from "./signIn"
import SignUp from "./signUp"

const AuthManege = () => {
    const [register, setRegister] = useState(true);

    const handleSwitchRegisterStatus = () => {
        register ? setRegister(false) : setRegister(true);
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                {register ? (<SignIn />) : (<SignUp />)}
            </div>
            <div className="register">
                {register ? 
                (<button className="auth-btn" onClick={handleSwitchRegisterStatus}>Don't have an acount? Sign up</button>)  
                : 
                (<button className="auth-btn" onClick={handleSwitchRegisterStatus}>Already have an account? Sign In</button>)}
            </div>
        </div>
    );
}


export default AuthManege;