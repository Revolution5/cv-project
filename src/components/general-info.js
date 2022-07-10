import React, {Component} from "react";
import "../styles/general-info.css";
import { Preview } from "./preview";

export class GeneralInfo extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            phone: 0,
            email: ""
        }
    }

    handleFirst = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLast = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="input">
                    <label>First Name</label>
                    <input onChange={this.handleFirst} id = "firstName" type = "text" placeholder="First Name"></input>  
                </div>
                <div className="input">
                    <label>Last Name</label>
                    <input onChange = {this.handleLast} id = "lastName" type = "text" placeholder="Last Name"></input> 
                </div>
                <div className="input">
                    <label>Phone Number</label>
                    <input id = "phoneNumber" type = "tel" placeholder="Phone #"></input>
                </div>
                <div className="input">
                    <label>Email</label>
                     <input id = "email" type = "email" placeholder="Email Address"></input>
                </div>
                
            </div>
        )
    }
}