import React from "react";
// eslint-disable-next-line
import styling from "../styling/imagecontainer.css"

export class ImageContainer extends React.Component {
  render() {
    const text = this.props.text.split("\n");
    let classNameImg = "img ";
    if (this.props.position === "left") {
      classNameImg = classNameImg + "floatLeft"
    } else {
      classNameImg = classNameImg + "floatRight"
    }
    if (this.props.position === "none") {
      return (
        <div className={this.props.contact ? "contactContainer" : "imageContainer"}>
          <div className="nonePadding">
            <h1 className="h1">{this.props.title}</h1>
            {text.map((line, i) =>
              <p className="p">{line}<br /></p>
            )}
          </div>
        </div>
      );
    } else if (this.props.position === "big") {
      return (
        <div className="imageContainer">
          <img className="bigImage" src={this.props.src} alt={this.props.alt} />
          <div className="bigPadding">
            <h1 className="h1 bigH1">{this.props.title}</h1>
            {text.map((line, i) =>
              <p className="p bigP">{line}<br /></p>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: this.props.bColor }} className="imageContainer">
          <img className={classNameImg} src={this.props.src} alt={this.props.alt} />
          <div className={this.props.position === "left" ? "leftPadding" : "rightPadding"}>
            <h1 className="h1">{this.props.title}</h1>
            {text.map((line, i) =>
              <p className="p">{line}<br /></p>
            )}
          </div>
        </div>
      );
    }
  }
}