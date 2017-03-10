import * as actionTypes from '../actions/actionTypes'
import { cellState, boardSize } from "../constants"

const initialState = { // initial state of application
  board: Array(boardSize).fill(Array(boardSize).fill(cellState.empty)),
  sunkenShips: {
    "carrier": { count: 0 },
    "battleship": { count: 0 },
    "cruiser": { count: 0 },
    "submarine": { count: 0 },
    "destroyer": { count: 0 },
  },
  points: 0,
  isGameOver: false
}

const isGameOver = (sunkenShips) => {
  for (let ship in sunkenShips) {
    if (sunkenShips[ship].count === 0)
      return false;
  }
  return true;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIT: {
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
        points: state.points + 1,
        isGameOver: isGameOver(newSunkenShips)
      }
    }
    case actionTypes.MISS: {
      return {
        ...state,
        board: [
          ...state.board.slice(0, action.coord.y),
          [...state.board[action.coord.y].slice(0, action.coord.x), cellState.miss, ...state.board[action.coord.y].slice(action.coord.x + 1)],
          ...state.board.slice(action.coord.y + 1)
        ]
      }
    }
    case actionTypes.RESTART: {
      return { ...initialState }
    }
    default:
      return state;
  }
}

export default rootReducer;
