import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'


import { restartGame } from '../actions'
import Board from "./Board"
import GameInfo from "./GameInfo"

const App = ({ board, sunkenShips, points, isGameOver, restartGame }) => {
    return (
        <div className="battleship">
            <Modal isOpen={isGameOver} contentLabel="No Overlay Click Modal" >
                <div className="modalWrapper" onClick={restartGame}>
                    <div className="modalContent">
                        Game Over
                    </div>
                </div>
            </Modal>
            <Board />
            <GameInfo />
        </div>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        restartGame: () => {
            dispatch(restartGame());
        }
    }
}
export default connect(
    (state) => (state),
    mapDispatchToProps
)(App)
