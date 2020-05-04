import React from 'react'
import izq from './izq.png';
import programac from './programac.png';
import ok from './ok.png';
import n from './n.png';
import der from './der.png';
import SwitchMode from '../SwitchMode';
import Buttons from './Buttons';
import './css.css'

export default function NavBar(props) {
    return (
        <div className="content-navBar">
            <div className="content-app navbar">
                <div className="logo">
                    <img className="imgs" src={izq} alt="<" />
                    <img className="letters"src={programac} alt="programac" />
                    <img className="imgs" src={ok} alt="ok" />
                    <img className="letters"src={n} alt="n" />
                    <img className="imgs" src={der} alt="/>" />
                </div>
                <Buttons />
                <SwitchMode setMode={props.setMode} />
            </div>
        </div>
    )
}
