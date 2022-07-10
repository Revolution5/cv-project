import React, {Component} from "react";

export class Education extends Component {
    render() {
        return (
           <div>
               <div className="input">
                   <label>School Name</label>
                   <input id="school-name" type="text"></input>
               </div>
               <div className="input">
                    <label>Title of Study</label>
                    <input id="title-of-study" type="text"></input>
               </div>
               <div>
                    <label>Graduation Date</label>
                    <input id="grad-date" type="date"></input>
               </div>
           </div> 
        )
    }
}