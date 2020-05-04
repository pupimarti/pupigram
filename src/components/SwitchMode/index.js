import React from 'react'
import './css.css'

export default function SwitchMode(props) {
    return (
        <button className="switch-mode" onClick={props.setMode}>
            <span role="img" aria-label="sun with face">🌞</span>
            <span role="img" aria-label="crescent moon">🌙</span>
        </button>
    )
}
