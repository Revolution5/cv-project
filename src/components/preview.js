import React, {Component} from "react";
import "../styles/app.css";

export class Preview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="right-side">
                <h1>Preview</h1>
                <p>Name: {this.props.firstName}</p>
                <p>Phone Number:</p>
                <p>Email:</p>
            </div>
        )
    }
}