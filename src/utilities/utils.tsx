export default function clearCanvas(context): void{
    context.clearRect(0, 0 , 1000, 600);
}

export interface IObjectBody {
    x: number
    y: number
}