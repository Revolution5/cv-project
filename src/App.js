import React, { Component } from "react";
import { GeneralInfo } from "./components/general-info";
import "./styles/app.css";
import { Education } from "./components/education";
import { Practical } from "./components/practical";
import { Preview } from "./components/preview";
import uniqid from "uniqid";

export class App extends Component {
  constructor() {
    super()

    this.state = {
      key: uniqid(),
      eduSections: [],
      practicalSections: []
    }
  }

  addEdu = () => {
    this.setState({
      key: uniqid(),
      eduSections: [...this.state.eduSections, <Education key={this.state.key}/>]
    })
  }

  addPractical = () => {
    this.setState({
      key: uniqid(),
      practicalSections:[...this.state.practicalSections, <Practical key={this.state.key}/>]
    })
  }

  render() {
    return (
      <div className="container">
        
          <div className="left-side">
            <h1>CV Application</h1>
            <h2>General Information</h2>
            <GeneralInfo/>

            <h2>Educational Experience</h2>
            {this.state.eduSections}
            <button onClick={this.addEdu}>Add</button>

            <h2>Practical Experience</h2>
            {this.state.practicalSections}
            <button onClick={this.addPractical}>Add</button>

            <button type="submit">Preview</button>
          </div>
        
        <Preview/>
      </div>
    )
  }
}