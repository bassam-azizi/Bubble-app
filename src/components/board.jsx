import React from "react";
import Bubble from "./bubble/bubble";

const Board = () => {
  return (
    <div className="container">
      <button className="playBtn">Play!</button>
      <div className="board">
        <Bubble />
      </div>
    </div>
  );
};

export default Board;
