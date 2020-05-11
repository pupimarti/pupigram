import React from 'react'
import { Link } from "react-router-dom";
import './css.css'

export default function NoPage(props) {

    return (
        <div>
        <p className="nouser">Esta página no está disponible.</p>
          {props.construction 
          ?<p className="nouser-desc">Esta página aún se encuentra en construcción. <Link to="/">Volver a Pupigram.</Link>
          </p>
          :<p className="nouser-desc">Es posible que el enlace que has seguido sea incorrecto o que se haya
          eliminado la página. <Link to="/">Volver a Pupigram.</Link>
          </p>}
      </div>
    )
}
