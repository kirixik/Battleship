import React from 'react'
import { connect } from 'react-redux'

const App = () => {
    return (
        <div>
            <h2>Battleship game</h2>
        </div>)
}

export default connect(
    (state) => (state)
)(App)
