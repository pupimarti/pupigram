import React, { useState } from "react";

import "./css.css";

export default function AddPost(props) {
  const [page, setPage] = useState(0);

  const handleBack = () => {
    if (page === 0) props.setImg(null);
    else setPage(0);
  };

  const handleSig = () => {
    if (page === 0) setPage(1);
  };

  return (
    <div className="content-add-post">
      <header className="content-header-add-post">
        <div className="chat-back" onClick={handleBack}></div>
        <h5>Nueva publicación</h5>
        <button onClick={handleSig} className="action-comment">
          {page === 0 ? "Siguiente" : "Compartir"}
        </button>
      </header>
      {page === 0 ? (
        <img src={props.img} className="img-post" alt="Imagen a agregar" />
      ) : (
        <div className="content-desc-new-post">
          <img
            src="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=Jf9Z_lzbyhIAX8Goisq&oh=a40f9aed80ddfc70f97243fbb84d4611&oe=5EE4368F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            className="img-user-add-post"
            alt="Tu imagen de perfil"
          />
          <textarea
            className="text-add-post"
            placeholder="Escribe un pie de foto..."
          />
          <img
            className="img-post-add-post"
            src={props.img}
            alt="La imagen del post"
          />
        </div>
      )}
    </div>
  );
}
