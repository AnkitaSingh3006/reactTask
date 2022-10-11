import React, { useState } from "react";
import './login.css';

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function login(){
        console.warn(email,password)
        let item={email,password};
        let result=fetch("https://reqres.in/api/login")
    }

    return <div className="container">
        <div>
            <h1>Login</h1>
        </div>
        <br/>
        <div className="inputChild">
            <fieldset><legend>Email</legend>
            <input type="text" placeholder="e.g. eve.holt@gmail.in" onChange={(e)=>setEmail(e.target.value)} />
            </fieldset>
        </div>
        <div className="inputChild">
            <fieldset><legend>Password</legend>
            <input type="password" placeholder="Password must contain letter and special symbol" onChange={(e)=>setPassword(e.target.value)}/>
            </fieldset>
        </div>
        <br/>
        <div className="inputChild">
            <button type="submit" onClick={login}>Submit</button>
        </div>

    </div>
}

export default Login