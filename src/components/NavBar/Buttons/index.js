import React from 'react'
import home from './home.svg';
import homeSelect from './home-select.svg';
import heart from '../../../img/heart.svg';
import direct from './direct.svg';
import search from './search.svg';
import explore from './explore.svg';
import add from './add.svg';
import account from './account.svg';
import './css.css';

export default function Buttons() {
    return (
        <div className="content-buttons">
            <img className="icon" src={true ? homeSelect : home} alt="Home" />
            <img className="icon pc" src={direct} alt="Direct" />
            <img className="icon mobile" src={search} alt="Search" />
            <img className="icon mobile" src={add} alt="Add" />
            <img className="icon pc" src={explore} alt="explore" />
            <img className="icon" src={heart} alt="Notif" />
            <img className="icon" src={account} alt="Cuenta" />
        </div>
    )
}
