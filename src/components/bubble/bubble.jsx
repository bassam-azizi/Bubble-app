import React, { Component } from "react";

class Bubble extends Component {
  render() {
    const style = {
      right: this.props.right
    };
    return <div className="bubble" style={{ style }} />;
  }
}

export default Bubble;
