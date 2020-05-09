import React from 'react'
import home from './home.svg';
import homeSelect from './home-select.svg';
import heart from '../../../img/heart.svg';
import direct from './direct.svg';
import smile from './add.svg';
import account from './account.svg';
import './css.css';

export default function Buttons() {
    return (
        <div className="content-buttons">
            <img className="icon" src={true ? homeSelect : home} alt="Home" />
            <img className="icon" src={direct} alt="Frases" />
            <img className="icon" src={smile} alt="Memes" />
            <img className="icon" src={heart} alt="Notif" />
            <img className="icon" src={account} alt="Cuenta" />
        </div>
    )
}
