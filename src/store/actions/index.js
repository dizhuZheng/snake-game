import { Directions } from "../../utilities";

export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_LEFT= "MOVE_LEFT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";
export const ADD_BODY = "ADD_BODY";

export const addBody = (body) => {
    return {
      type: ADD_BODY,
      payload: {
        body: body,
        amount: 20, 
        direction: Directions.Left
      }
    }
}

export const moveLeft = () => {
    return {
      type: MOVE_LEFT,
      payload: {amount: 20, direction: Directions.Left}
    }
}

export const moveRight = () => {
    return {
      type: MOVE_RIGHT,
      payload: 20
    }
}

export const moveDown = (body) => {
  return {
    type: MOVE_DOWN,
    payload: 20
  }
}

export const moveUp = (body) => {
  return {
    type: MOVE_UP,
    payload: 20
  }
}