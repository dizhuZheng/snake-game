import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT, ADD_BODY} from "../actions/index";
import { Point, Directions, Block, move} from "/Users/dizhu/snake-game/src/utilities/index.tsx"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

let p1: Point = {x: Math.floor(Math.random()*1000/20) * 20, y: Math.floor(Math.random()*600/20) * 20}
let b1: Block = {pos:{x: 500, y: 300}, direction: Directions.Left}
let b2: Block = {pos:{x: 480, y: 300}, direction: Directions.Left}
let head: Block

const todosSlice = createSlice({
  name: 'snake',

  initialState: { 
   snake: [b1, b2],
   fruit: p1,
   counter: 0
  },

  reducers: {
    blockAdded(state, action: PayloadAction<Block>) {
      state.snake.push(action.payload)
    },

    increaseScore(state) {
      state.counter += 1
    },

    moveLeft(state) {
      head = state.snake[0]
      head.direction = Directions.Left
      state.snake.forEach((element) => {
        if (element.pos != head.pos){
          move(element) 
        }
      })
    },

    moveRight(state) {
      head = state.snake[0]
      head.direction = Directions.Right
      state.snake.forEach((element) => {
        while (element.pos != head.pos){
          move(element) 
        }
      })
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
    },
  }
})

export const { blockAdded, moveLeft, moveDown, moveRight, moveUp, changeFruit, increaseScore } = todosSlice.actions
export default todosSlice.reducer

