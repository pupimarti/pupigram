import React from 'react'
import './css.css'

export default function SwitchMode(props) {
    
    return (
        <button className="switch-mode" onClick={props.setMode}>
            <span role="img" className="moon" aria-label="crescent moon">🌙</span>
            <span role="img" className="sun" aria-label="sun with face">🌞</span>
        </button>
    )
}
