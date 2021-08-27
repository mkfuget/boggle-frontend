import React, {useState} from "react"
import UserPool from "../UserPool"
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
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value = {email}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    value = {password}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
                ></input>
            </form>
        </div>
    )
}
export default SignUp;

