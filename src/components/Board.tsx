import React, { useRef, useEffect, useState, useMemo, useCallback  }  from "react"
import { clearCanvas, drawSnake, drawGrid, Point, drawFruit } from "../utilities/index.tsx"
import { useAppDispatch, useAppSelector } from '../hooks.tsx'
import { withDefaultColorScheme } from "@chakra-ui/react"
import { blockAdded, moveLeft, moveDown, moveRight, moveUp} from "../store/reducers/index.ts"
import { Directions } from "../utilities/index.tsx"

const Board = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const snake = useAppSelector((state) => state.snake)

    const [gg, setGG] = useState(false);

    const memoizedValue = useMemo(() => {
      let p1 = Math.floor(Math.random()*props.width/20) * 20

      let p2 = Math.floor(Math.random()*props.height/20) * 20

      let result : Point = {x: p1, y: p2}

      return result;

    }, []);

    const dispatch = useAppDispatch()

    useEffect(() => {
      const canvas = canvasRef.current

      snake.forEach((element) => {
        if(element.pos.x <= 0 || element.pos.y >= 599 || element.pos.y <= 0 || element.pos.x >= 999)
          {
            setGG(true)
          }
        });

      if(canvas)
      {
        const context = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId

        const render = () => {
          frameCount++
          animationFrameId = window.requestAnimationFrame(render)

          if ( frameCount % 20 === 0)
          {
            clearCanvas(context, props.width, props.height)
            dispatch(moveRight());
            drawGrid(context, props.width, props.height)
          }
      }
      
      if(props.stop == false && gg == false)
      {
        render()
      }

      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
    }, [snake, props.stop])
  
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas)
        {
          const context = canvas.getContext('2d')

          drawSnake(context, snake)

          drawGrid(context, props.width, props.height)

          drawFruit(context, memoizedValue)

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
        }, [snake]);
    
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