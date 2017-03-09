import * as actionTypes from "./actionTypes"
import { cellState } from "../constants"
import battleShipService from "../services"
export const addHit = (x, y, newSunkenShips) => ({
    type: actionTypes.HIT,
    coord: { x, y },
    newSunkenShips
})

export const addMiss = (x, y) => ({
    type: actionTypes.MISS,
    coord: { x, y }
})

export const restartGame = () => {
    battleShipService.restartService();
    return {
        type: actionTypes.RESTART,
    }
}

export const checkField = (x, y) => (dispatch, getState) => {
    battleShipService.checkField(x, y).then(action => {
        switch (action.type) {
            case cellState.hit: return dispatch(addHit(x, y, action.newSunkenShip));
            case cellState.miss: return dispatch(addMiss(x, y));
            default: return getState();
        }
    });
}