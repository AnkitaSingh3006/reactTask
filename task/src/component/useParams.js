import React from "react";
import { useParams, Link } from "react-router-dom";
import './useParams.css'

function User() {
    const params = useParams();
    const { name } = params;
    console.warn(name)

    return (
        <div>
            <div>
                <Link to="/user/buck">
                    <button className="btns">Buck</button>
                </Link>
                <Link to="/user/peter">
                    <button className="btns">Peter</button>
                </Link>
            </div>
            <br />
            <p style={{margin: "10px" , fontSize: "28px"}}>This is {name} Page</p>
        </div>
    )
}

export default User