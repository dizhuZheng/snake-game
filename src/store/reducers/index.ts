import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT, ADD_BODY} from "../actions/index";
import { Point, Directions, Block, move} from "/Users/dizhu/snake-game/src/utilities/index.tsx"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

let p1: Point = {x: Math.floor(Math.random()*1000/20) * 20, y: Math.floor(Math.random()*600/20) * 20}
let b1: Block = {pos:{x: 500, y: 300}, direction: Directions.Left}
let b2: Block = {pos:{x: 480, y: 300}, direction: Directions.Left}
let head: Block
let initialState = { 
  snake: [b1, b2],
  fruit: p1,
  counter: 0,
  test: 0
 }

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'left': {
      state.snake.forEach((element) => {
        element.pos.x -= 20
      })
      return {
        ...state,
     };
    }
    case 'down': {
      state.snake.forEach((element) => {
        element.pos.y += 20
      })
      return {
        ...state,
     };
    }
    case 'up': {
      state.snake.forEach((element) => {
        element.pos.y -= 20
      })
      return {
        ...state,
     };
    }
    case 'right': {
      state.snake.forEach((element) => {
        element.pos.x += 20
      })
      return {
        ...state,
     };
    }
    default:
      return state
  }
}
/*
const todosSlice = createSlice({
  name: 'snake',

  initialState: { 
   snake: [b1, b2],
   fruit: p1,
   counter: 0,
   test: 0
  },

  reducers: {
    blockAdded(state, action: PayloadAction<Block>) {
      state.snake.push(action.payload)
    },

    increment(){
      console.log('this is from reducer')
    },

    increaseScore(state) {
      state.counter += 1
    },

    left(state){
      state.snake.forEach((element) => {
        element.pos.x -= 20
      })
    },

    right(state){

    },

    up(state){

    },

    down(state){

    },

    changeFruit(state) {
      let p2: Point = {x: Math.floor(Math.random()*1000/20) * 20, y: Math.floor(Math.random()*600/20) * 20}
      state.fruit = p2
    },
  }
})

export const { blockAdded, left, right, up, down, changeFruit, increaseScore } = todosSlice.actions
export default todosSlice.reducer 
*/
export default todosReducer

