import React, {useState} from "react"
import UserPool from "../UserPool"
import Button from 'react-bootstrap/Button';
import logo from '../assets/icons/ACCLogoLightBlueTransparent.png'; // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";

library.add(faUser);
library.add(faLock);

const SignUp = () => 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: React.SyntheticEvent): void => 
    {
        event.preventDefault();
        UserPool.signUp(email, password, [], [], (error, data) => {
            if (error) {
                console.log(error);
            }
            console.log(data);
        })

    };

    return (
        <div className = "signupwrapper">
            <div className ="logo">
                <img 
                    src = {logo} 
                    alt = "logo"
                    width = "180px"
                    height = "180px"
                ></img>
            </div>
            <div className = "companytitle">
                APPLIED CODING CONCEPTS
            </div>
            <form onSubmit={onSubmit}>
                <div className = "inputwrapper">
                    <FontAwesomeIcon icon="user" /> 
                    <input
                        className = "userentry email"
                        type = "text"
                        placeholder = "email"
                        value = {email}
                        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
                    >
                    </input>
                </div>
                <div className = "inputwrapper">
                    <FontAwesomeIcon icon="lock" /> 
                    <input
                        className = "userentry password"
                        type = "password"
                        placeholder = "password"
                        value = {password}
                        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
                    ></input>
                </div>

                <br></br>
                <Button variant="primary" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUp;

