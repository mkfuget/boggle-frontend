import React, {useState} from "react"

const SignUp = () => 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event: React.SyntheticEvent): void => 
    {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    value = {username}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)}
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

}