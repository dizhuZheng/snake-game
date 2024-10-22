import React, { useRef, useEffect }  from "react"
import { legacy_createStore } from "redux";
import { start } from "repl";
// import clearCanvas from "../utilities/index";

export interface IBoard {
    height: number;
    width: number;
}

const Board = (props) => {
    const canvasRef = useRef(null)
    let fruitX = Math.floor(Math.random()*(props.width / 20))
    let fruitY = Math.floor(Math.random()*(props.height / 20))

    const drawSnake = (ctx, startX, startY, endX, endY) => {
        ctx.clearRect(0, 0 , props.width, props.height);
        ctx.fillStyle = "green";
        ctx.fillRect(startX, startY, endX, endY);
        ctx.fillStyle = "purple";
        ctx.fillRect(fruitX * 20, fruitY * 20, 20, 20)
        drawGrid(ctx, props.width, props.height)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let startX = 0
        let startY = 0
        let endX = 40
        let endY = 20
        let frameCount = 0
        let animationFrameId
    
        const render = () => {
            frameCount++
            animationFrameId = window.requestAnimationFrame(render)
            if ( frameCount % 20 === 0)
            {
                drawSnake(context, startX, startY, endX, endY)
                startX += 20
            }
        }
        if(props.stop === false)
        {
            render()
        }
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
        }, [drawSnake]
    )

    return (
        <canvas
        ref={canvasRef}
        style = {{
            border: "3px solid black",
        }}
        height={props.height}
        width={props.width}
        />
    );
};

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

// function assertIsNumber (value: unknown): asserts value is number {
//     if (typeof value !== 'number') throw new Error('Not a number');
//   }
export default Board;