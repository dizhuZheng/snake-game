import React from "react"

export interface IBoard {
    height: number;
    width: number;
  }
  
const Board = ({ height, width }: IBoard) => {
    return (
        <canvas
        style = {{
            border: "3px solid black",
        }}
        height={height}
        width={width}
        />
    );
};

export default Board;