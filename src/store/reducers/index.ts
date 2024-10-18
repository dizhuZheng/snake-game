// This file will contain all the reducer logic related to the component.
import { MOVE_DOWN, MOVE_LEFT, MOVE_UP, MOVE_RIGHT } from "../actions/index";

const initialState = {
    data: "",
    snake: {},
    fruit: {}
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVE_RIGHT":
            /**
             * Perform a certain set of operations
             */
            return {
                type: MOVE_RIGHT, 
                data: action.payload
            };
        case "MOVE_LEFT":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };
        case "MOVE_UP":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };

        case "MOVE_DOWN":
            /**
             * Perform a certain set of operations
             */
            return {
                // Note: Each action object must have a unique type value. Along with it, any additional data passed with the action object is optional and will depend on the logic used for updating the state
                ...state, data: action.payload
            };
        case "EAT_FRUIT":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };
        default:
            return state;
    }
};

export default gameReducer;