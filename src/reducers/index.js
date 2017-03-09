import * as ActionTypes from '../actions/actionTypes'
import { cellState, boardSize } from "../constants"
const getInitBoard = function (size = boardSize) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push(Array(size).fill(cellState.empty));
  }
  return board;
}

const initialState = { // initial state of application
  board: getInitBoard(),
  sunkenShips: {
    "carrier": { count: 0 },
    "battleship": { count: 0 },
    "cruiser": { count: 0 },
    "submarine": { count: 0 },
    "destroyer": { count: 0 },
  },
  points: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HIT: {
      var newBoard = [
        ...state.board.slice(0, action.coord.y),
        [...state.board[action.coord.y].slice(0, action.coord.x), cellState.hit, ...state.board[action.coord.y].slice(action.coord.x + 1)],
        ...state.board.slice(action.coord.y + 1)
      ];
      let newSunkenShips = [];
      if (action.newSunkenShips) {
        newSunkenShips = {
          ...state.sunkenShips,
          [action.newSunkenShips]: {
            ...state.sunkenShips[action.newSunkenShips],
            count: state.sunkenShips[action.newSunkenShips].count + 1
          }
        }
      } else {
        newSunkenShips = { ...state.sunkenShips };
      }
      return {
        board: newBoard,
        sunkenShips: newSunkenShips,
        points: state.points + 1
      }
    }
    case ActionTypes.MISS: {
      return {
        ...state,
        board: [
          ...state.board.slice(0, action.coord.y),
          [...state.board[action.coord.y].slice(0, action.coord.x), cellState.miss, ...state.board[action.coord.y].slice(action.coord.x + 1)],
          ...state.board.slice(action.coord.y + 1)
        ]
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
