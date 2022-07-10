import React, {Component} from "react";

export class Practical extends Component {
    render() {
        return (
          <div>
              <div className="input">
                  <label>Company Name</label>
                  <input type="text"></input>
              </div>
              <div className="input">
                    <label>Position Title</label>
                    <input type="text"></input>
              </div>
              <div className="input">
                    <label>Start Date</label>
                    <input type="date"></input>
              </div>
              <div className="input">
                    <label>End Date</label>
                    <input type="text"></input>
              </div>
          </div>
        )
    }
}