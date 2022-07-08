import React, {Component} from "react";
import "../styles/general-info.css";

export class GeneralInfo extends Component {
    render() {
        return (
            <form>
                <div className="input">
                    <label>First Name</label>
                    <input id = "firstName" type = "text" placeholder="First Name"></input>  
                </div>
                <div className="input">
                    <label>Last Name</label>
                    <input id = "lastName" type = "text" placeholder="Last Name"></input> 
                </div>
                <div className="input">
                    <label>Phone Number</label>
                    <input id = "phoneNumber" type = "tel" placeholder="Phone #"></input>
                </div>
                <div className="input">
                    <label>Email</label>
                     <input id = "email" type = "email" placeholder="Email Address"></input>
                </div>
            </form>
        )
    }
}