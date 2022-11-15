import React, { useEffect, useState } from "react";
import './userData.css';
import axios from "axios";
// import DataTable from 'react-data-table-component'
import Popup from "./popup";

function Userdata() {

    const [userlist, setUserlist] = useState([]);

    const [buttonPopup, setButtonPopup] = useState(false)

    const getUserList = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2");
            setUserlist(response.data.data);
            console.log("API", response.data)
        } catch (error) {
            console.log(error);
        }
    }

    // console.log("userList",userlist)

    // const columns = [
    //     {
    //         name: "id",
    //         selector: (row) => row.id,
    //     },
    //     {
    //         name: "email",
    //         selector: (row) => row.email,
    //     },
    //     {
    //         name: "firstname",
    //         selector: (row) => row.first_name,
    //     },
    //     {
    //         name: "lastname",
    //         selector: (row) => row.last_name,
    //     },
    //     {
    //         name: "avatar",
    //         selector: (row) => <img width={95} height={95} src={row.avatar} alt="loading" />,
    //     },
    // ]

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="userContainer">
            {/* <DataTable columns={columns} data={userlist} /> */}

            <table>
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
                            <td><button className="namePopup" onClick={()=>setButtonPopup(true)}>{val.email}</button></td>
                            <td>{val.first_name}</td>
                            <td>{val.last_name}</td>
                            <td><img width={95} height={95} src={val.avatar} alt="loading" /></td>
                        </tr>
                    )
                })}
            </table>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Popup Container</h3>
            </Popup>
        </div>
    )
}

export default Userdata