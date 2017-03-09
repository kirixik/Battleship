import React from 'react'
import { connect } from 'react-redux'

const GameInfo = ({ points, sunkenShips, isGameOver  }) => {
    const getShipPointsClass = (value) => {
        const baseClass = "shape-item_strength-item shape-item_strength-item";
        if (sunkenShips[value] && sunkenShips[value].count)
            return baseClass + "--hit"
        return baseClass + "--miss"
    }
    return (
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
                    <img className="shape-item_picture" src="assets/aircraft_shape.png" alt="Aircraft shape" />
                    <span className={getShipPointsClass('carrier')}></span>
                    <span className={getShipPointsClass('carrier')}></span>
                    <span className={getShipPointsClass('carrier')}></span>
                    <span className={getShipPointsClass('carrier')}></span>
                    <span className={getShipPointsClass('carrier')}></span>
                </div>
                <div className="shape-item">
                    <img className="shape-item_picture" src="assets/battleship_shape.png" alt="Battleshape shape" />
                    <span className={getShipPointsClass('battleship')}></span>
                    <span className={getShipPointsClass('battleship')}></span>
                    <span className={getShipPointsClass('battleship')}></span>
                    <span className={getShipPointsClass('battleship')}></span>
                </div>
                <div className="shape-item">
                    <img className="shape-item_picture" src="assets/cruiser_shape.png" alt="Cruiser shape" />
                    <span className={getShipPointsClass('cruiser')}></span>
                    <span className={getShipPointsClass('cruiser')}></span>
                    <span className={getShipPointsClass('cruiser')}></span>
                </div>
                <div className="shape-item">
                    <img className="shape-item_picture" src="assets/submarine_shape.png" alt="Submarine Shape" />
                    <span className={getShipPointsClass('submarine')}></span>
                    <span className={getShipPointsClass('submarine')}></span>
                    <span className={getShipPointsClass('submarine')}></span>
                </div>
                <div className="shape-item">
                    <img className="shape-item_picture" src="assets/carrier_shape.png" alt="Carrier shape" />
                    <span className={getShipPointsClass('destroyer')}></span>
                    <span className={getShipPointsClass('destroyer')}></span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    points: state.points,
    sunkenShips: state.sunkenShips,
});

export default connect(
    mapStateToProps
)(GameInfo)
