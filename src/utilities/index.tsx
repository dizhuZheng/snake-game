export function clearCanvas(context, width, height): void{
    context.clearRect(0, 0 , width, height);
}

export interface Block {
    x: number;
    y: number;
    color: string; 
}

export function drawBlock(context, block: Block) {
    context.fillStyle = block.color
    context.fillRect(block.x, block.y, 20, 20)
}

