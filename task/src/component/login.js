import React, { useEffect, useState } from "react";
import './login.css';
import validation from "./validation";

function Login() {

    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");

    // function login(){
    //     console.warn(email,password)
    //     let item={email,password};
    //     let result=fetch("https://reqres.in/api/login")
    // }

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setError]= useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.email]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        validation(values);
        setError(validation(values))
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && (values.email !== "" && values.password !== 0))
        alert("Form Submitted")
    },[errors])

    return <div className="container">
        <div>
            <h1>Login</h1>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
            <div className="inputChild">
                <fieldset><legend>Email</legend>
                    <input type="text" placeholder="e.g. eve.holt@gmail.in" name="email" value={values.email} onChange={handleChange} />
                </fieldset>
                {errors.email && <p style={{color:"red", fontSize:"13px"}}>{errors.email}</p>}
            </div>
            <div className="inputChild">
                <fieldset><legend>Password</legend>
                    <input type="password" placeholder="Password must contain letter and special symbol" name="password" value={values.password} onChange={handleChange} />
                </fieldset>
                {errors.password && <p style={{color:"red", fontSize:"13px"}}>{errors.password}</p>}
            </div>
            <br />
            <div className="inputChild">
                <button type="submit">Submit</button>
            </div>

        </form>
    </div>
}

export default Login