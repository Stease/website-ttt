import React from "react";
import { logoBar } from "../preferences/preferences.js";
// eslint-disable-next-line
import styling from "../styling/logobar.css";

export class LogoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: logoBar.companyName,
      companyLogo: logoBar.companyLogo,
    };
  }

  handleClickLogo() {
    window.location.replace("/?page=home");
  }

  render() {
    return (
      <div className="logoBar">
        <button onClick={this.handleClickLogo} className="logoBtn"><img className="logoImg" src={this.state.companyLogo} alt="logo"></img></button>
        <h1 className="logoBarTitle">{this.state.companyName}</h1>
      </div>
    );
  }
}