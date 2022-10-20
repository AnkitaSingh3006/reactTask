import React, { useState } from "react";
import './login.css';
import validation from "./validation";
import axios from "axios";

function Login() {

    const [formInputs, setFormInputs] = useState({});

    const [errors, setError] = useState({});

    const handleChange = (event) => {
        // console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('formInputs', formInputs)
        setError(validation(formInputs));
        axios.post('https://reqres.in/api/login', {
            email: formInputs.email,
            password: formInputs.password
        })
            .then(result => {
                console.log(result);
                alert("Login Success")
            })
            .catch(error => {
                console.log(error);
            })

    }


    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="inputChild">
                <label>Email
                    <br/>
                    <input type="text" name="email" value={formInputs.email || ''} onChange={handleChange} />
                </label>
                {errors.email && <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>}
            </div>
            <div className="inputChild" style={{paddingTop: "20px"}}>
                <label>Password
                    <br/>
                    <input type="password" name="password" value={formInputs.password || ''} onChange={handleChange} />
                </label>
                {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>}
            </div>
            <br />
            <div className="inputChild">
                <button type="submit">Submit</button>
            </div>

        </form>
    </div>
}

export default Login