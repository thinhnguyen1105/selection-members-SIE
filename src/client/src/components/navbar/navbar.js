import React from "react";
import "./navbar.scss";

export class Navbar extends React.Component {
  state = {
    selectionMenu: ["File", "Edit", "Options", "Select", "Window", "Run", "SIE"]
  };
  render() {
    return (
      <>
        <div className="navbar-selection is-flex align-items-center">
          <div className="window-selection-1 has-small-left-margin"></div>
          <div className="window-selection-2"></div>
          <div className="window-selection-3"></div>
          {this.state.selectionMenu.map((item, index) => {
            return (
              <span key={index} className="text-navbar">
                {item}
              </span>
            );
          })}
        </div>
        <div className="detail-tools"></div>
      </>
    );
  }
}
