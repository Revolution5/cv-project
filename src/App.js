import React, {Component} from "react";
import { GeneralInfo } from "./components/general-info";
import "./styles/app.css";

export class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
          <h1>CV Application</h1>
          <GeneralInfo/>
      </div>
    )
  }
}