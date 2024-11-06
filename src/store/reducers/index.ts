import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT, ADD_BODY} from "../actions/index";
import { Block, Directions } from "/Users/dizhu/snake-game/src/utilities/index.tsx"
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'snake',
  initialState: { 
    snake: [{pos:{x: 500, y: 300}, direction: Directions.Left}, {pos:{x: 480, y: 300}, direction: Directions.Left}]
  },
  reducers: {
    blockAdded(state, action) {
      state.snake.push({
        pos: action.payload.pos,
        direction: action.payload.direction,
      })
    },
    moveLeft(state) {
      state.snake.forEach((element) => {
        element.direction = Directions.Left
        element.pos.x -= 20
      });
    },
    moveRight(state) {
      state.snake.forEach((element) => {
        element.direction = Directions.Right
        element.pos.x += 20
      });
    },
    moveDown(state) {
      state.snake.forEach((element) => {
        element.direction = Directions.Down
        element.pos.y += 20
      });
    },
    moveUp(state) {
      state.snake.forEach((element) => {
        element.direction = Directions.Up
        element.pos.y -= 20
    });
    },
  }
})

export const { blockAdded, moveLeft, moveDown, moveRight, moveUp } = todosSlice.actions
export default todosSlice.reducer

