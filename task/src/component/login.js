import React, { useState } from "react";
import './login.css';
import validation from "./validation";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [formInputs, setFormInputs] = useState({});

    const [isLoading, setLoading]= useState(false);

    const loader = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
    },3500)
    }

    const [errors, setError] = useState({});

    const navigate = useNavigate()

    const handleChange = (event) => {
        // console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({ ...values, [name]: value }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(validation(formInputs));
        console.log('formInputs', formInputs)

        if (errors && Object.keys(errors).length === 0 && Object.getPrototypeOf(errors) === Object.prototype) {
            axios.post('https://reqres.in/api/login', {
                email: formInputs.email,
                password: formInputs.password  
            })
                .then(result => {
                    console.log(result);
                    localStorage.setItem('token',result.data.token)
                    // alert("Login Success");
                    toast.success("Login Success!", {
                        position: "top-center"
                    });
                    navigate('/userdata');
                })
                .catch(error => {
                    toast.error(error.message, {
                        position: "top-center"
                    });
                })

        }
    }


    return <div className="container">
        <div>{isLoading ? "":
        (<button onClick={loader}>Click</button>)}
        {isLoading ?<div> <h4>fetching</h4>
        <img style={{width:"20px",height:"20px"}} src="https://tse3.mm.bing.net/th?id=OIP.RdB6_DvUTVfQa6Gqt-kvtAHaEK&pid=Api&P=0" alt="loading"/> </div>:''}
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="inputChild">
                <label>Email
                    <br />
                    <input type="text" name="email" value={formInputs.email || ''} onChange={handleChange} />
                </label>
                {errors.email && <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>}
            </div>
            <div className="inputChild" style={{ paddingTop: "20px" }}>
                <label>Password
                    <br />
                    <input type="password" name="password" value={formInputs.password || ''} onChange={handleChange} />
                </label>
                {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>}
            </div>
            <br />
            <div className="inputChild">
                <button type="submit" className="button">Submit</button>
            </div>

        </form>
        <ToastContainer />

    </div>
}

export default Login