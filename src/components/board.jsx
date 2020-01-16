import React, { Component } from "react";
import Bubble from "./bubble/bubble";

class Board extends Component {
  state = {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0
  };
  handelPlay = () => {
    const x = 7;
    this.setState({
      right: setInterval(right => {
        return (right = +x);
      }, 1000)
    });
  };
  render() {
    return (
      <div className="container">
        <button className="playBtn" onClick={this.handelPlay}>
          Play!
        </button>
        <div className="board">
          <Bubble
            right={this.state.right}
            left={this.state.left}
            top={this.state.left}
            bottom={this.state.bottom}
          />
        </div>
      </div>
    );
  }
}

export default Board;
