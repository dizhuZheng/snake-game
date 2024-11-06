import React, { useRef, useEffect, useState }  from "react"
import { clearCanvas, drawSnake, drawGrid } from "../utilities/index.tsx"
import { useAppDispatch, useAppSelector } from '../hooks.tsx'
import { withDefaultColorScheme } from "@chakra-ui/react"
import { blockAdded, moveLeft, moveDown, moveRight, moveUp } from "../store/reducers/index.ts"
import { Directions } from "../utilities/index.tsx"

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
        
              switch (event.key) {
                case 'a':
                  // move left
                  dispatch(moveLeft());
                  clearCanvas(context, props.width, props.height)
                  drawGrid(context, props.width, props.height)
                  break;
                case 's':
                  // Move right
                  dispatch(moveRight());
                  clearCanvas(context, props.width, props.height)
                  drawGrid(context, props.width, props.height)
                  break;
                case 'w':
                  // Move up
                  dispatch(moveUp());
                  clearCanvas(context, props.width, props.height)
                  drawGrid(context, props.width, props.height)
                  break;
                case 'd':
                  // Move down
                  dispatch(moveDown());
                  clearCanvas(context, props.width, props.height)
                  drawGrid(context, props.width, props.height)
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
        }, [snake, canvasRef]);
    
    return (
        <>
          <canvas
          ref={canvasRef}
          style = {{
              border: "3px solid black",
          }}
          height={props.height}
          width={props.width}
          />
        </>
    );
};

export default Board