import React from 'react'
import { connect } from 'react-redux'
import { cellState } from "../constants"
import { checkField } from '../actions'

const Board = ({ board, sunkenShips, selectCell }) => {
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
        <table className="battleship_square">
            <tbody>
                {cells}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    board: state.board,
    sunkenShips: state.sunkenShips
});
const mapDispatchToProps = (dispatch) => {
    return {
        selectCell: (cellIndex, rowIndex, ) => {
            dispatch(checkField(cellIndex, rowIndex));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)
