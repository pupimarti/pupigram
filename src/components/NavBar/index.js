import React from 'react'
import pupigram from './pupigram.png';
import Buttons from './Buttons';
import SwitchMode from '../SwitchMode';
import './css.css'

export default function NavBar(props) {
    return (
        <div className="content-navBar">
            <div className="content-app navbar">
                <img className="logo" src={pupigram} alt="logo" />
                <SwitchMode setMode={props.setMode} />
                <Buttons />
            </div>
        </div>
    )
}
