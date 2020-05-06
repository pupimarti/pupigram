import React from 'react';
import './css.css';

export default function Options(props) {
    return (
        <div className="content-modal" onClick={props.closeOptions}>
            <div className="modal">
                <div className="action-modal">Compartir</div>
                <div className="action-modal action-modal-bt">Copiar enlace</div>
                <div className="action-modal action-modal-bt" onClick={() => {alert('asd')}}>Ir a la publicación</div>
                <div className="action-modal action-modal-bt">Cancelar</div>
            </div>    
        </div>
    )
}
