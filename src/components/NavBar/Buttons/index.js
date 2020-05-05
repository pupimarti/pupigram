import React from 'react'
import home from './home.svg';
import heart from './heart.svg';
import brain from './brain.svg';
import smile from './smileys.svg';
import './css.css';

export default function Buttons() {
    return (
        <div className="content-buttons">
            <img className="icon" src={home} alt="Home" />
            <img className="icon" src={brain} alt="Frases" />
            <img className="icon" src={smile} alt="Memes" />
            <img className="icon" src={heart} alt="Notif" />
        </div>
    )
}
