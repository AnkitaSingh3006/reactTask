import React from "react";
import { useNavigate } from "react-router-dom";
import './logout.css';

function Logout() {

    const navigate = useNavigate()

    const removeItem = () => {
        localStorage.removeItem("token");
        navigate('/login')
    }

    return (
        <div>
            <button className="buttons" onClick={removeItem}>Remove LocalStorage Item</button>
        </div>
    )
}

export default Logout