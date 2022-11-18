import React, { useEffect, useState } from "react";
import './userData.css';
import axios from "axios";
import Popup from "./popup";

function Userdata() {

    const [userlist, setUserlist] = useState([]);

    const [buttonPopup, setButtonPopup] = useState(false)

    const [modeldata,setModeldata] = useState({
        id:'',
        first_name:'',
        email:''
     })

     const showDetail = (val) =>
     { 
        setModeldata(val)
     }

    const getUserList = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2/");
            setUserlist(response.data.data);
            console.log("API", response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="userContainer">
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                    {userlist.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td><button className="namePopup" onClick={() => { setButtonPopup(true); showDetail(val) }}>{val.email}</button></td>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td><img width={95} height={95} src={val.avatar} alt="loading" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Popup trigger={buttonPopup} popupData={modeldata} setTrigger={setButtonPopup}>
            </Popup>
        </div>
    )
}

export default Userdata