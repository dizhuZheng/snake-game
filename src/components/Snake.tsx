import React, { useEffect } from "react"
import { useSelector, useDispatch, connect} from "react-redux";
import { left, right } from '../store/reducers/index.ts'

const Snake = (state) => {
    const getSnake = useSelector(state => state.counter.snake);
    const dispatch = useDispatch();
    
    function drawSnake(context, snake): void {
        snake.forEach(element => {
            context.fillStyle = "green"
            context.fillRect(element.pos.x, element.pos.y, 20, 20)
        });
    }

    // window.addEventListener('keydown', function(event) {
    //     if (event.key === 'a'||'A') {
    //         // Do something when the Enter key is pressed
    //           dispatch(left())
    //       }
    //       else if (event.key === 's'||'S') {
    //       ``// Do something when the Enter key is pressed
    //           dispatch(right())
    //       }
        // if (event.key === 'a'||'A') {
        //   // Do something when the Enter key is pressed
        //     dispatch({ type: 'MOVE_LEFT', payload: 20 })
        // }
        // else if (event.key === 's'||'S') {
        // ``// Do something when the Enter key is pressed
        //     dispatch({ type: 'MOVE_DOWN', payload: 20 })
        // }
        // else if (event.key === 'd'||'D') {
        //     // Do something when the Enter key is pressed
        //     dispatch({ type: 'MOVE_RIGHT', payload: 20 })
        // }
        // else if (event.key === 'w'||'W') {
        //     // Do something when the Enter key is pressed
        //     dispatch({ type: 'MOVE_UP', payload: 20 })
        // }
    return 
  };

export default Snake;