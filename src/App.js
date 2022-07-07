import React, { Component } from "react";
import { GeneralInfo } from "./components/general-info";
import "./styles/app.css";
import { Education } from "./components/education";
import { Practical } from "./components/practical";

export class App extends Component {
  constructor() {
    super()

    this.state = {
      eduSections: [],
      practicalSections: []
    }
  }

  addEdu = () => {
    this.setState({
      eduSections: [...this.state.eduSections, <Education/>]
    })
  }

  addPractical = () => {
    this.setState({
      practicalSections:[...this.state.practicalSections, <Practical/>]
    })
  }

  render() {
    return (
      <div className="container">
          <h1>CV Application</h1>
          <h2>General Information</h2>
          <GeneralInfo/>

          <h2>Educational Experience</h2>
          {this.state.eduSections}
          <button onClick={this.addEdu}>Add</button>

          <h2>Practical Experience</h2>
          {this.state.practicalSections}
          <button onClick={this.addPractical}>Add</button>
      </div>
    )
  }
}