import React from "react";
import "../css/home.scss";
import { Navbar } from "../components/navbar/navbar";

export class HomePageScreen extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    );
  }
}
