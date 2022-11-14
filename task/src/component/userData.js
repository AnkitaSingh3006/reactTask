import React, { useEffect, useState } from "react";
import './userData.css';
import axios from "axios";
import DataTable from 'react-data-table-component'

function Userdata() {

    const [userlist, setUserlist] = useState([]);

    const getUserList = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2");
            setUserlist(response.data);
            console.log("API",response.data)
        } catch (error) {
            console.log(error);
        }
    }

    // console.log("userList",userlist)

    const columns = [
        {
            name: "id",
            selector: (row) => row.id,
        },
        {
            name: "email",
            selector: (row) => row.email,
        },
        {
            name: "firstname",
            selector: (row) => row.first_name,
        },
        {
            name: "lastname",
            selector: (row) => row.last_name,
        },
        {
            name: "avatar",
            selector: (row) => row.avatar,
        },
    ]

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="userContainer">
            <DataTable columns={columns} data={userlist} />
        </div>
    )
}

export default Userdata