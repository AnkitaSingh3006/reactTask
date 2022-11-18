import React, { useEffect, useState } from "react";
import './userData.css';
import axios from "axios";
// import DataTable from 'react-data-table-component'
import Popup from "./popup";

function Userdata() {

    const [userlist, setUserlist] = useState([]);

    const [buttonPopup, setButtonPopup] = useState(false)

    const [modeldata,setModeldata] = useState({
        id:'',
        first_name:'',
        email:''
     })

     const showDetail = (id) =>
     { 
       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(resposne=> resposne.json())
       .then(res=>setModeldata(res))
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


    // console.log("userList",userlist)

    //  const columns = [
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


    return (
        <div className="userContainer">
            {/* <DataTable columns={columns} data={userlist} /> */}

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
                                <td><button className="namePopup" onClick={() => { setButtonPopup(true); showDetail(val.id) }}>{val.email}</button></td>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td><img width={95} height={95} src={val.avatar} alt="loading" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div>
                <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>  
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modeldata.id}</td>
                              <td>{modeldata.name}</td>
                              <td>{modeldata.email}</td>   
                           </tr>
                          
                        </tbody>
                    </table>
                </div>
            </Popup>
        </div>
    )
}

export default Userdata