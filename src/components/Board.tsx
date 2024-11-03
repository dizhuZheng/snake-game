import React, { useRef, useEffect, useState }  from "react"
import { clearCanvas, Block, Directions } from "../utilities/index.tsx"
import { left, right } from '../store/reducers/index.ts'
import { useAppDispatch, useAppSelector } from '../hooks.tsx'


const Board = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    let fruitX = Math.floor(Math.random()*props.width/20) * 20
    let fruitY = Math.floor(Math.random()*props.height/20) * 20

    const snake = useAppSelector((state) => state.snake)

    const dispatch = useAppDispatch()
    
    function drawSnake(context, snake): void {
        snake.forEach(element => {
            context.fillStyle = "green"
            context.fillRect(element.pos.x, element.pos.y, 20, 20)
        });
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas)
        {
            const context = canvas.getContext('2d')
            let frameCount = 0
            let animationFrameId
            context.fillStyle = "purple"
            context.fillRect(fruitX, fruitY, 20, 20)
            drawGrid(context, props.width, props.height)

            drawSnake(context, snake)

            // window.addEventListener('keydown', function(event) {
            //     if (event.key === 'a'||'A') {
            //         // Do something when the Enter key is pressed
            //           dispatch(left())
            //           drawSnake(context, snake)
            // }
            //     else if (event.key === 's'||'S') {
            //     ``// Do something when the Enter key is pressed
            //         dispatch(right())
            //         drawSnake(context, snake)
            // }
            //     }
            // )

            // const render = () => {
            //     frameCount++
            //     animationFrameId = window.requestAnimationFrame(render)
            //     if ( frameCount % 20 === 0)
            //     {
            //         drawSnake(context, snake)
            //     }
            // }
            // if(props.stop === false)
            // {
            //     render()
            // }
            // return () => {
            //     window.cancelAnimationFrame(animationFrameId)
            // }
        }
    }, []); 

    // function updateScore() {
    //     setIndex(index + 1);
    // }

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