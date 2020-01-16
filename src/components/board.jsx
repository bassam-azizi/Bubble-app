import React from "react";
import Bubble from "./bubble/bubble";

const Board = () => {
  return (
    <div className="container">
      <button className="a playBtn">Play!</button>
      <div className="b board">
        <Bubble />
      </div>
    </div>
  );
};

export default Board;
