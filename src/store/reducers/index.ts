import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT, ADD_BODY} from "../actions/index";
import { Point, Directions, Block} from "/Users/dizhu/snake-game/src/utilities/index.tsx"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

let p1: Point = {x: Math.floor(Math.random()*1000/20) * 20, y: Math.floor(Math.random()*600/20) * 20}

const todosSlice = createSlice({
  name: 'snake',
  initialState: { 
   snake: [{pos:{x: 500, y: 300}, direction: Directions.Left}, {pos:{x: 480, y: 300}, direction: Directions.Left}],
   fruit: p1
  },
  reducers: {
    blockAdded(state, action: PayloadAction<Block>) {
      state.snake.push(action.payload)
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
    changeFruit(state) {
      let p2: Point = {x: Math.floor(Math.random()*1000/20) * 20, y: Math.floor(Math.random()*600/20) * 20}
      state.fruit = p2
    }
  }
})

export const { blockAdded, moveLeft, moveDown, moveRight, moveUp, changeFruit } = todosSlice.actions
export default todosSlice.reducer

