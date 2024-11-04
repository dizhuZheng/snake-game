import React, { useRef, useEffect, useState }  from "react"
import { clearCanvas, drawSnake } from "../utilities/index.tsx"
import { left, right } from '../store/reducers/index.ts'
import { useAppDispatch, useAppSelector } from '../hooks.tsx'

const keyDown = (e) => {
    console.log("keyDown! '"+e.key+"'");
  }

const Board = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const snake = useAppSelector((state) => state.snake)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas)
        {
            const context = canvas.getContext('2d')
        
            drawSnake(context, snake)

            drawGrid(context, props.width, props.height)

            const handleKeyDown = (event) => {
                console.log('Key pressed:', event.key);
          
                // Handle specific key presses
                switch (event.key) {
                  case 'ArrowUp':
                    // Move up
                    break;
                  case 'ArrowDown':
                    // Move down
                    break;
                  case 'ArrowLeft':
                    // Move left
                    break;
                  case 'ArrowRight':
                    // Move right
                    break;
                  default:
                    break;
                }
              };
          
              window.addEventListener('keydown', handleKeyDown);
          
              return () => {
                window.removeEventListener('keydown', handleKeyDown);
              };
            }
            }, []);
    return (
        <>
            <Score />
            <canvas
            ref={canvasRef}
            style = {{
                border: "3px solid black",
            }}
            height={props.height}
            width={props.width}
            />
            <div onKeyDown={keyDown}></div>
        </>
    );
};

function Score() {
    return <h3>Current Score: </h3>
}

function drawGrid(context, width, height){
    for (var x = 0; x <= width; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
    }

    for (var x = 0; x <= height; x += 20) {
        context.moveTo(0,  x);
        context.lineTo(width, x);
    }
    context.strokeStyle = "DodgerBlue";
    context.stroke();
}

export default Board