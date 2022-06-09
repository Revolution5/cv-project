import React, {Component} from "react";
import "../styles/general-info.css";

export class GeneralInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <form>
                <div className="input">
                    <field>First Name</field>
                    <input id = "firstName" type = "text" placeholder="First Name"></input>  
                </div>
                <div className="input">
                    <field>Last Name</field>
                    <input id = "lastName" type = "text" placeholder="Last Name"></input> 
                </div>
                <div className="input">
                    <field>Phone Number</field>
                    <input id = "phoneNumber" type = "tel" placeholder="Phone #"></input>
                </div>
                <div className="input">
                    <field>Email</field>
                     <input id = "email" type = "email" placeholder="Email Address"></input>
                </div>
            </form>
        )
    }
}