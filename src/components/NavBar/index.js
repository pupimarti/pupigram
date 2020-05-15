import React from 'react'
import pupigram from './pupigram.png';
import Buttons from './Buttons';
import SwitchMode from './SwitchMode';
import direct from './Buttons/direct.svg';
import {Link} from 'react-router-dom';
import './css.css'

export default function NavBar(props) {
    return (
        <div className="content-navBar">
            <div className="content-app navbar no-select">
                <Link to="/direct" className="content-button-navbar mobile"><img className="icon mobile direct" src={direct} alt="direct" /></Link>
                <Link to="/" className="c-logo"><img className="logo" src={pupigram} alt="logo" /></Link>
                <SwitchMode setMode={props.setMode} />
                <Buttons />
            </div>
        </div>
    )
}
