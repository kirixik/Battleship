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
    }
}
describe('reducer tests', () => {
    it('should provide the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should add hit to board', () => {
        const stateWithOneHitField = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, "hit", cellState.empty, cellState.empty],
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
            }
        }
        expect(reducer(initialState, {
            type: actionTypes.HIT,
            coord: {
                x: 7,
                y: 3
            }
        })).toEqual(stateWithOneHitField)
    })

    it('should add miss to board', () => {
        const stateWithOneHitField = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, "miss", cellState.empty, cellState.empty],
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
            }
        }
        expect(reducer(initialState, {
            type: actionTypes.MISS,
            coord: {
                x: 7,
                y: 3
            }
        })).toEqual(stateWithOneHitField)
    })

    it('should add hit to board and sunk one ship', () => {
        const stateWithOneHitField = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, "hit", cellState.empty, cellState.empty],
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
            }
        }
        const stateWithTwoHitsFieldAndOneSunkenShip = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, "hit", "hit", cellState.empty],
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
            }
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
        const stateWithOneHitField = {
            board: [
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, "hit", cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty],
                [cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty, cellState.empty]
            ],
            sunkenShips: []
        }
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


