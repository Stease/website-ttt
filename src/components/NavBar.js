import React from 'react';
import { navbar } from '../preferences/preferences.js';
// eslint-disable-next-line
import styles from "../styling/navbar.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarItems: navbar.navbarItems,
      navbarItemsIcons: navbar.navbarItemsIcons,
      navbarLinks: navbar.navbarLinks,
    };
  }

  render() {
    return (
      <ul className="ul">
        {this.state.navbarItems.map((item, i) =>
          <li className="liLeft" key={i}><a className="a" href={this.state.navbarLinks[i]}>{this.state.navbarItemsIcons[i]} {item}</a></li>
        )}
      </ul>
    );
  }
}