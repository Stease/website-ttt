import React from "react";
import { ImageContainer } from "./ImageContainer";
import { watDoenWijPageWindow } from "../preferences/preferences.js";

export class WatDoenWijPageWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: watDoenWijPageWindow.title,
      text: watDoenWijPageWindow.text,
      imagePosition: watDoenWijPageWindow.imagePosition,
    }
  }

  render() {
    return (
      <div>
        <ImageContainer title={this.state.title} text={this.state.text} position={this.state.imagePosition} />
      </div>
    );
  }
}