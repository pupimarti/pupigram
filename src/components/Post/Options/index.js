import React, { useState, useContext } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./css.css";
import Context from 'components/Context/AppContext';
import deletePost from "components/services/deletePost";

export default function Options(props) {
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);

  const {profile} = useContext(Context);

  const handleCopyTextOk = () => {
    handleCloseModal();
    alert('Enlace copiado en el portapapeles.');
  }

  const delete_post = async () => {
    if(window.confirm('Seguro que desea eliminar esta publicación?')){
      if(await deletePost(props.id, profile.user))
        alert('Publicación eliminada con éxito.');
      else alert('Hubo un error al eliminar la publicación');
      handleCloseModal();
    }
  }

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
              "https://twitter.com/intent/tweet?text=https%3A%2F%2Fpupimarti.github.io%2Fpupigram%23%2Fposts%2F" +
              props.id
            }
            target="_blank"
            rel="noopener noreferrer"
            className="action-modal"
          >
            Compartir
          </a>

          <CopyToClipboard text={"https://pupimarti.github.io/pupigram/#/posts/"+props.id}
            onCopy={handleCopyTextOk}>
            <div className="action-modal action-modal-bt">Copiar enlace</div>
          </CopyToClipboard>
          
          {props.user === profile.user &&
          <div
          className="action-modal action-modal-bt"
          onClick={delete_post}
        >
          Eliminar publicación
        </div>}

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
