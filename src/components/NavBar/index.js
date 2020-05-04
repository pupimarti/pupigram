import React from 'react'
import logo from './logopalabra.jpg';
import home from './home.svg';
import SwitchMode from '../SwitchMode';
import './css.css'
export default function NavBar(props) {
    return (
        <div className="content-navBar">
            <img className="logo" src={logo} alt="Home" />
            <img className="icon" src={home} alt="Home" />
            <SwitchMode setMode={props.setMode} />
        </div>
    )
}
