import React from 'react'
import { connect } from 'react-redux'
import { checkField } from '../actions'
import { cellState } from "../constants"

const App = ({ board, sunkenShips, points, selectCell }) => {
    const getShipPointsClass = (value) => {
        const baseClass = "shape-item_strength-item shape-item_strength-item";
        if (sunkenShips[value] && sunkenShips[value].count)
            return baseClass + "--hit"
        return baseClass + "--miss"
    }
    const getButtonClass = (value) => {
        const cssPrefix = 'battleship_square-cell ';
        switch (value) {
            case cellState.empty: return cssPrefix + 'empty';
            case cellState.miss: return cssPrefix + 'miss';
            case cellState.hit: return cssPrefix + 'hit';
            default: return cssPrefix + 'empty';
        }
    }
    const rowsCells = (row, rowIndex) => {
        return row.map((value, cellIndex) => (
            <td key={cellIndex} className={getButtonClass(value)}>
                <button onClick={(e) => {
                    if (value === cellState.empty)
                        selectCell(cellIndex, rowIndex)
                }}>
                </button>
            </td>));
    };
    const cells = board.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {rowsCells(row, rowIndex)}
        </tr>)
    );
    return (
        <div className="battleship">
            <table className="battleship_square">
                <tbody>
                    {cells}
                </tbody>
            </table>
            <div className="battleship_result-panel">
                <div className="score-table">
                    <div className="score-table_player-info score-table_player-info--active">
                        <div className="score-table_player-score">{points}</div>
                        <div className="score-table_player-name">player 1</div>
                    </div>
                    <div className="score-table_player-info">
                        <div className="score-table_player-score">0</div>
                        <div className="score-table_player-name">player 2</div>
                    </div>
                </div>
                <div className="shape-list">
                    <div className="shape-item">
                        <img className="shape-item_picture" width="80" src="assets/aircraft_shape.png" alt="Aircraft shape" />
                        <span className={getShipPointsClass('carrier')}></span>
                        <span className={getShipPointsClass('carrier')}></span>
                        <span className={getShipPointsClass('carrier')}></span>
                        <span className={getShipPointsClass('carrier')}></span>
                        <span className={getShipPointsClass('carrier')}></span>
                    </div>
                    <div className="shape-item">
                        <img className="shape-item_picture" width="80" src="assets/battleship_shape.png" alt="Battleshape shape" />
                        <span className={getShipPointsClass('battleship')}></span>
                        <span className={getShipPointsClass('battleship')}></span>
                        <span className={getShipPointsClass('battleship')}></span>
                        <span className={getShipPointsClass('battleship')}></span>
                    </div>
                    <div className="shape-item">
                        <img className="shape-item_picture" width="80" src="assets/cruiser_shape.png" alt="Cruiser shape" />
                        <span className={getShipPointsClass('cruiser')}></span>
                        <span className={getShipPointsClass('cruiser')}></span>
                        <span className={getShipPointsClass('cruiser')}></span>
                    </div>
                    <div className="shape-item">
                        <img className="shape-item_picture" width="80" src="assets/submarine_shape.png" alt="Submarine Shape" />
                        <span className={getShipPointsClass('submarine')}></span>
                        <span className={getShipPointsClass('submarine')}></span>
                        <span className={getShipPointsClass('submarine')}></span>
                    </div>
                    <div className="shape-item">
                        <img className="shape-item_picture" width="80" src="assets/carrier_shape.png" alt="Carrier shape" />
                        <span className={getShipPointsClass('destroyer')}></span>
                        <span className={getShipPointsClass('destroyer')}></span>
                    </div>
                </div>
            </div>
        </div>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCell: (cellIndex, rowIndex, ) => {
            dispatch(checkField(cellIndex, rowIndex));
        }
    }
}

export default connect(
    (state) => (state),
    mapDispatchToProps
)(App)
