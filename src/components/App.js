import React from 'react'
import { connect } from 'react-redux'
import { checkField } from '../actions'
import { cellState } from "../constants"

const App = ({ board, sunkenShips, selectCell }) => {
    const rowsCells = (row, rowIndex) => {
        return row.map((cell, cellIndex) => (<button key={cellIndex} onClick={(e) => {
            if (cell === cellState.empty)
                selectCell(cellIndex, rowIndex)
        }}>{cell}</button>));
    };
    const cells = board.map((row, rowIndex) => (
        <div key={rowIndex}>
            {rowsCells(row, rowIndex)}
        </div>)
    );
    return (
        <div>
            <h2>Battleship game</h2>
            {cells}
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
