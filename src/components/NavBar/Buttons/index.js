import React from 'react'
import home from './home.svg';
import './css.css';

export default function Buttons() {
    return (
        <div className="content-buttons">
            <img className="icon" src={home} alt="Home" />
        </div>
    )
}
