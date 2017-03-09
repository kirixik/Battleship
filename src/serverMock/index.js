import { cellState } from '../constants'
import _ from "lodash"
const InitGameState = {
    "shipTypes": {
        "carrier": { "size": 5, "count": 1 },
        "battleship": { "size": 4, "count": 1 },
        "cruiser": { "size": 3, "count": 1 },
        "submarine": { "size": 3, "count": 1 },
        "destroyer": { "size": 2, "count": 1 },
    },
    "layout": [
        { "ship": "carrier", "positions": [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
        { "ship": "battleship", "positions": [[5, 2], [5, 3], [5, 4], [5, 5]] },
        { "ship": "cruiser", "positions": [[8, 1], [8, 2], [8, 3]] },
        { "ship": "submarine", "positions": [[3, 0], [3, 1], [3, 2]] },
        { "ship": "destroyer", "positions": [[0, 0], [1, 0]] }
    ],
    "history": []
}

class ServerSide {
    constructor() {
        this.gameState = _.cloneDeep(InitGameState);
    }
    hitFieldAsync(x, y) {
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.hitField(x, y));
            }, 50);
        });
        return promise;
    }

    hitField(x, y) {
        if (this.isHitInHistory(x, y)) {
            return {
                type: "already_hit"
            }
        }
        this.gameState.history.push([x, y]);
        for (let i = 0; i < this.gameState.layout.length; i++) {
            const currentShip = this.gameState.layout[i];
            if (this.isShipHit(currentShip, x, y)) {
                currentShip["hits"] = (currentShip["hits"]) ? currentShip["hits"] + 1 : 1;
                if (currentShip["hits"] === this.gameState.shipTypes[currentShip.ship].size) {
                    return {
                        type: cellState.hit,
                        newSunkenShip: currentShip.ship,
                    }
                } else {
                    return {
                        type: cellState.hit
                    }
                }
            }
        }
        return {
            type: cellState.miss
        }
    }
    isShipHit(ship, x, y) {
        return ship.positions.some((item) => {
            return (item[0] === x && item[1] === y)
        })
    }
    isHitInHistory(x, y) {
        return this.gameState.history.some((item) => {
            return (item[0] === x && item[1] === y);
        });

    }
}

export default ServerSide;
