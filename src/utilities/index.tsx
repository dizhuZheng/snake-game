export function clearCanvas(context, width, height): void{
    context.clearRect(0, 0 , width, height);
}

export interface Point {
    x: number;
    y: number;
}

export enum Directions {
    Left,
    Right,
    Up,
    Down
}

export interface Block {
   id: number
   pos: Point
   direction: Directions
}

export function drawSnake(context, snake): void {
    snake.forEach(element => {
        context.fillStyle = "green"
        context.fillRect(element.pos.x, element.pos.y, 20, 20)
    });
}
