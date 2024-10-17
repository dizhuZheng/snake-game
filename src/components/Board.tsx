import React, { useRef, useEffect }  from "react"

export interface IBoard {
    height: number;
    width: number;
  }

const Board = ({ height, width}: IBoard) => {
    const canvasRef = useRef(null)
    var p = 0
      useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        //Our draw come here
        drawGrid(context, width, p , height)
      }, [drawGrid])
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

function drawGrid(context, bw, p, bh){
    for (var x = 0; x <= bw; x += 20) {
        context.moveTo(x + p, p);
        context.lineTo(x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 20) {
        context.moveTo(p,  x + p);
        context.lineTo(bw + p, x + p);
    }
    context.strokeStyle = "DodgerBlue";
    context.stroke();
}

export default Board;