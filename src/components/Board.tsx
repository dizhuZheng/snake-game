import React, { useRef, useEffect }  from "react"

export interface IBoard {
    height: number;
    width: number;
  }

const Board = ({ height, width}: IBoard) => {
    const canvasRef = useRef(null)
      
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = 'purple'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
      }, [])
    return (
        <canvas
        ref={canvasRef}
        style = {{
            border: "3px solid black",
        }}
        height={height}
        width={width}
        />
    );
};

export default Board;