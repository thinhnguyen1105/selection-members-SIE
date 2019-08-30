import React from "react";

export class Home extends React.Component {
  state = {
    test: "Hello World"
  };
  render() {
    return <div>{this.state.test}</div>;
  }
}
