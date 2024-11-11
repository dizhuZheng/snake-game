import React, { useRef, useEffect, useState, useMemo, useCallback  }  from "react"
import { clearCanvas, drawSnake, drawGrid, Point, drawFruit, Block} from "../utilities/index.tsx"
import { useAppDispatch, useAppSelector } from '../hooks.tsx'
import { withDefaultColorScheme } from "@chakra-ui/react"
import { blockAdded, moveLeft, moveDown, moveRight, moveUp, changeFruit} from "../store/reducers/index.ts"
import { Directions } from "../utilities/index.tsx"


const Board = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const snake = useAppSelector((state) => state.snake)

    const [gg, setGG] = useState(false);

    const fruit = useAppSelector((state) => state.fruit)

    //setFruit({x: Math.floor(Math.random()*props.width/20) * 20, y: Math.floor(Math.random()*props.height/20) * 20})

    const dispatch = useAppDispatch()

    /*useEffect(() => {
      const canvas = canvasRef.current

      snake.forEach((element) => {
        if(element.pos.x <= 0 || element.pos.y >= 599 || element.pos.y <= 0 || element.pos.x >= 999)
          {
            setGG(true)
          }
        });
      
      if(snake[0].pos.x == memoizedValue.x && snake[0].pos.y == memoizedValue.y)
        {
          dispatch(blockAdded({pos:{x:memoizedValue.x, y: memoizedValue.y}, Directions: Directions.Left}))
        }

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
    }, [snake, props.stop])*/
  
    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas)
        {
          const context = canvas.getContext('2d')

          drawSnake(context, snake)

          drawGrid(context, props.width, props.height)

          drawFruit(context, fruit)

          if(snake[0].pos.x == fruit.x && snake[0].pos.y == fruit.y)
          {
            let body:Block = {pos: {x: fruit.x, y: fruit.y}, direction: snake[0].direction}
            dispatch(blockAdded(body));
            console.log(snake)
            dispatch(changeFruit())
          }

          const handleKeyDown = (event) => {
        
              switch (event.key) {
                case 'a':
                  // move left
                  dispatch(moveLeft());
                  clearCanvas(context, props.width, props.height)
                  drawGrid(context, props.width, props.height)
                  break;
                case 's':
                  // Move down
                  dispatch(moveDown());
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
                  // Move Right
                  dispatch(moveRight());
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
        }, [snake, blockAdded]);
    
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