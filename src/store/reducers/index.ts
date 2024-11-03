import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT, ADD_BODY} from "../actions/index";
import { Block, Directions } from "/Users/dizhu/snake-game/src/utilities/index.tsx"
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  
  initialState: {
    value: 0,
    snake: [{id:0, pos:{x: 300, y: 500}, direction: Directions.Left}, {id:1, pos:{x: 280, y: 500}, direction: Directions.Left}]
  },

  reducers: {
    left: state => {
        state.snake.forEach( (element) => {
            element.pos.x -= 20
        });
    },
    right: state => {
        state.snake.forEach( (element) => {
            element.pos.x += 20
        });
    }
  }
})

export const { left, right } = counterSlice.actions

export default counterSlice.reducer

// const initialState = {
//     snake: [{id:0, pos:{x: 300, y: 500}, direction: Directions.Left}, {id:1, pos:{x: 280, y: 500}, direction: Directions.Left}],
//     fruit: [],
//     //gam
// };

// const gameReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_BODY':
//             return {
//                 ...state,
//                 snake: [
//                     ...state.snake,
//                     {
//                       id: action.id,
//                       text: action.text
//                     }
//                   ]
//             };

//         case "MOVE_RIGHT":
//             return {
//                 ...state,
//                 snake: state.snake.forEach((element) => element.pos.x += action.payload)
//             }

//         case "MOVE_LEFT":
//             return state.snake.forEach((element) => element.pos.x -= action.payload)

//         case "MOVE_UP":
//             return state.snake.forEach((element) => element.pos.y -= action.payload)

//         case "MOVE_DOWN":
//             return state.snake.forEach((element) => element.pos.y += action.payload)
            
//         case 'GAME_OVER':
//             return {
//                 ...state,
//                 tasks: [...state.snake, action.payload]
//             };
//         default:
//             return state;
//     }
// };

// export default gameReducer;