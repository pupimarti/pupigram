import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import "./css.css";

export default function Options(props) {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  ReactModal.setAppElement("#root");
  return (
    <React.Fragment>
      <div className="points" onClick={handleOpenModal}>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>
      </div>
      <ReactModal
        isOpen={open}
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal">
          <a
            href={
              "https://wa.me/?text=%20https://pupimarti.github.io/pupigram/posts/" +
              props.id
            }
            target="_blank"
            rel="noopener noreferrer"
            className="action-modal"
          >
            Compartir
          </a>
          <div className="action-modal action-modal-bt">Copiar enlace</div>
          <Link
            to={"/posts/" + props.id}
            className="action-modal action-modal-bt"
          >
            Ir a la publicación
          </Link>
          <div
            className="action-modal action-modal-bt"
            onClick={handleCloseModal}
          >
            Cancelar
          </div>
        </div>
      </ReactModal>
    </React.Fragment>
  );
}
