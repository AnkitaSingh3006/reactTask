import React from "react";
import { Link, Outlet } from "react-router-dom";
import './useParams.css'

function Profile() {
    return (
        <div>
            <div>
                <Link to="/profile/detail">
                    <button className="btns">Detail</button>
                </Link>
                <Link to="/profile/follower">
                    <button className="btns">Follower</button>
                </Link>
                <Link to="/profile/following">
                    <button className="btns">Following</button>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Profile