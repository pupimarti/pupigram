import React from 'react';

import './css.css';

export default function AddPost(props) {
    return (
        <div className="content-add-post">
        <header className="content-header-add-post">
          <div
            className="chat-back"
            onClick={() => props.setImg(null)}
          ></div>
          <h5>Nueva publicación</h5>
          <button className="action-comment">Siguiente</button>
        </header>
            <img src={props.img} className="img-post" alt="Imagen a agregar" />
        </div>
    )
}
