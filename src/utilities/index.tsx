export function clearCanvas(context, width, height): void{
    context.clearRect(0, 0 , width, height);
}

export interface Point {
    readonly x: number;
    readonly y: number;
}

export enum Directions {
    Left,
    Right,
    Up,
    Down
}

export interface Block {
   pos: Point
   direction: Directions
}

export function drawSnake(context, snake): void {
    context.fillStyle = "green"
    snake.forEach(element => {
        context.fillRect(element.pos.x, element.pos.y, 20, 20)
    });
}

export function drawFruit(context, Point): void {
    context.fillStyle = "purple"
    context.fillRect(Point.x, Point.y, 20, 20)
}

export function drawGrid(context, width, height){
    for (var x = 0; x <= width; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
    }

    for (x = 0; x <= height; x += 20) {
        context.moveTo(0,  x);
        context.lineTo(width, x);
    }
    context.strokeStyle = "DodgerBlue";
    context.stroke();
}

export function move(block) {
    switch(block.direction) {
    case Directions.Left:
        block.pos.x -= 20
        break;
    case Directions.Right:
        block.pos.x += 20
        break;
    case Directions.Up:
        block.pos.y -= 20
        break;
    case Directions.Down:
        block.pos.y += 20
        break;
    }
}