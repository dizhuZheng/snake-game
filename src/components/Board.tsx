import React, { useRef, useEffect, useState }  from "react"
import { clearCanvas, Block, drawBlock } from "../utilities/index.tsx"

const Board = (props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [index, setIndex] = useState(0);

    const fruit: Block = {
        x: Math.floor(Math.random()*props.width/20) * 20,
        y: Math.floor(Math.random()*props.height/20) * 20,
        color: "purple"
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let frameCount = 0
        let animationFrameId
        
        drawGrid(context, props.width, props.height)

        drawBlock(context, fruit)

        const render = () => {
            frameCount++
            animationFrameId = window.requestAnimationFrame(render)
            if ( frameCount % 20 === 0)
            {
                // drawSnake(context, startX, startY, endX, endY)
                // startX += 20
            }
        }

        if(props.stop === false)
        {
            render()
        }
        
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
        }, []
    )

    function updateScore() {
        setIndex(index + 1);
    }

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

export default Board;