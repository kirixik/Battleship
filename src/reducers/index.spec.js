import reducer from './index'
import { cellState } from '../constants'
import * as actionTypes from '../actions/actionTypes'
const initialState = {
    board: [
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty]
    ],
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
const stateWithOneHitField = {
    board: [
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.hit, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty]
    ],
    sunkenShips: {
        "carrier": { count: 0 },
        "battleship": { count: 0 },
        "cruiser": { count: 0 },
        "submarine": { count: 0 },
        "destroyer": { count: 0 },
    },
    points: 1,
    isGameOver: false
}
const stateWithOneMissField = {
    board: [
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.miss, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
        [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty]
    ],
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
describe('reducer tests', () => {
    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should add hit to board', () => {
        expect(reducer(initialState, {
            type: actionTypes.HIT,
            coord: {
                x: 7,
                y: 3
            }
        })).toEqual(stateWithOneHitField)
    })

    it('should add miss to board', () => {
        expect(reducer(initialState, {
            type: actionTypes.MISS,
            coord: {
                x: 7,
                y: 3
            }
        })).toEqual(stateWithOneMissField)
    })

    it('should add hit to board and sunk one ship', () => {
        const stateWithTwoHitsFieldAndOneSunkenShip = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.hit, cellState.hit, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty]
            ],
            sunkenShips: {
                "carrier": { count: 0 },
                "battleship": { count: 0 },
                "cruiser": { count: 0 },
                "submarine": { count: 0 },
                "destroyer": { count: 1 },
            },
            points: 2,
            isGameOver: false
        }
        expect(reducer(stateWithOneHitField, {
            type: actionTypes.HIT,
            coord: {
                x: 8,
                y: 3
            },
            newSunkenShips: "destroyer"
        })).toEqual(stateWithTwoHitsFieldAndOneSunkenShip)
    })
    it('initial state should not be changed', () => {
        var result = reducer(initialState, {
            type: actionTypes.HIT,
            coord: {
                x: 7,
                y: 3
            }
        })
        expect(initialState).not.toEqual(result);
    })
})


