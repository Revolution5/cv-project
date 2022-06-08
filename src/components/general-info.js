import React, {Component} from "react";

export class GeneralInfo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <form>
                <input id = "firstName" type = "text" placeholder="First Name"></input>
                <input id = "lastName" type = "text" placeholder="Last Name"></input>
                <input id = "phoneNumber" type = "tel" placeholder="Phone #"></input>
                <input id = "email" type = "email" placeholder="Email Address"></input>
            </form>
        )
    }
}