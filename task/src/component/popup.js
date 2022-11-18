import React from "react";
import './popup.css'

function Popup(props) {
    console.log('props', props)
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>X</button>
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
                              <td>{props.popupData.id}</td>
                              <td>{props.popupData.first_name}</td>
                              <td>{props.popupData.email}</td>   
                           </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup